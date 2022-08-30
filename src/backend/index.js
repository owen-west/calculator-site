const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.post('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/unitconversion/temperature/:value1-:unit1-to-:unit2', (req, res) => {
  let value1 = req.params.value1;
  const unit1 = req.params.unit1;
  const unit2 = req.params.unit2;
  if (isNaN(parseFloat(value1))) {
    res.json({error: "Invalid value!"});
    res.end();
  } else {
    value1 = parseFloat(value1);
  }
  const result = convertTemperature(unit1, value1, unit2);
  res.json({
    message: `${value1} ${unit1} is ${result} ${unit2}`,
    value1: value1,
    unit1: unit1,
    unit2: unit2,
    result: result
  });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function convertTemperature(unit1, value1, unit2) {
  if (unit1 === 'C') {
    if (unit2 === 'F') {
      return (value1 * 9/5) + 32;
    } else if (unit2 === 'K') {
      return value1 + 273.15;
    }
  } else if (unit1 === 'F') {
    if (unit2 === 'C') {
      return (value1 - 32) * 5/9;
    } else if (unit2 === 'K') {
      return (value1 - 32) * 5/9 + 273.15;
    }
  } else if (unit1 === 'K') {
    if (unit2 === 'C') {
      return value1 - 273.15;
    } else if (unit2 === 'F') {
      return (value1 - 273.15) * 9/5 + 32;
    }
  }
}
