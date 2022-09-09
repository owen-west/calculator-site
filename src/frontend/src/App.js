import logo from './logo.svg';
import './App.css';
import Button from '@mui/joy/Button';
import TabPanel from '@mui/joy/TabPanel';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import { CssVarsProvider } from '@mui/joy/styles';

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="select-box">
          <div className="select-category">
            <Typography level="h5">Category:</Typography>
            <SelectCategory />
          </div>
          <div className="select-subcategory">
            <Typography level="h5">Subcategory:</Typography>
            <SelectSubcategory />
          </div>
        </div>
        <div className="input-output">
          <div className="input">
            <TextField
              disabled={false}
              label="From:"
              size="lg"
              variant="solid"
              type="number"
            />
            <TempTab defaultValue="C"/>
          </div>
          <div className="equals">
            <p>=</p>
          </div>
          <div className="output">
            <TextField
              disabled
              label="To:"
              size="lg"
              variant="solid"
            />
            <TempTab defaultValue="F"/>
          </div>
        </div>
        <Button
          sx={{ marginTop: 5 }}
          variant="solid"
          onClick={fetchUnitConversion()}
          color="primary"
          size="lg"
        >
          Calculate
        </Button>
      </CssVarsProvider>
    </div>
  );
}

const SelectCategory = () => {
  return (
    <Select defaultValue="unitconversion">
      <Option value="unitconversion">Unit Conversion</Option>
      <Option disabled value="financial">Financial Calculators -- Coming Soon</Option>
    </Select>
  );
}

const SelectSubcategory = () => {
  return (
    <Select defaultValue="temperature">
      <Option value="temperature">Temperature</Option>
      <Option disabled value="length">Length -- Coming Soon</Option>
      <Option disabled value="area">Area -- Coming Soon</Option>
      <Option disabled value="volume">Volume -- Coming Soon</Option>
      <Option disabled value="mass">Mass -- Coming Soon</Option>
      <Option disabled value="time">Time -- Coming Soon</Option>
    </Select>
  );
}

const TempTab = (props) => {
  return (
    <div>
      <Tabs className="tabsInputTemp" defaultValue={props.defaultValue}>
        <TabList variant="outlined" color="neutral">
          <Tab value={"C"}>C</Tab>
          <Tab value={"F"}>F</Tab>
          <Tab value={"K"}>K</Tab>
        </TabList>
        <TabPanel value={"C"}>
          <b>Celsius</b>
        </TabPanel>
        <TabPanel value={"F"}>
          <b>Fahrenheit</b>
        </TabPanel>
        <TabPanel value={"K"}>
          <b>Kelvin</b>
        </TabPanel>
      </Tabs>
    </div>
  );
}

const fetchUnitConversion = (unitType, value, unitInput, unitOutput) => {
  fetch(`https://goldfish-app-skl3v.ondigitalocean.app/unitconversion/${unitType}/${value}-${unitInput}-to-${unitOutput}`)
  .then(response => response.json())
  .then(data => console.log(data));
}

export default App;
