import React from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Footer from "./Components/footer";
import DataTable from "./Components/dataTable";
import DataTableBasic from "./Components/dataTableBasic";
import Header from "./Components/header";
import HeaderPost from "./Components/headerpost";
import Image from "next/image";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Table from "./Components/Table";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PropTypes from "prop-types";
// import Tabs from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import CloseIcon from "@mui/icons-material/Close";
import AddCompetitor from "./Components/AddCompetitor";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Table from "react-bootstrap/Table";
import LoginModel from "./Components/loginmodel";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import TableFilter from "./Components/tableFilter";
import { analytics } from "../server";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Tabs from "react-bootstrap/Tabs";
// import ListGroup from "react-bootstrap/ListGroup";
// import CloseIcon from "@mui/icons-material/Close";
// import AddCompetitor from "./Components/AddCompetitor";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import LoginModel from "./Components/loginmodel";
import LineChart from "./Components/charts/LineChart";
import BarChart from "./Components/charts/BarChart";
import { useRouter } from "next/router";
import {DataContext} from "../context"
import loader from "../public/loader.svg"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Dashboard(props) {
  const [blurRadius, setBlurRadius] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [data,setData]=React.useState([]);
  const [tableData,setTableData]=React.useState([]);
  const [tableVisible, setTableVisible] = React.useState(false);
  // const data=useContext(DataContext)
 
  // console.log(data.data.areaPrices);

  const currentYear = new Date().getFullYear();
  const router = useRouter();
  var apartment = router.query.apartment;
  var type;
  const param = router.query.type;
  // const res = param.substr(param.length - 9, 9);
  const res= param;

  if (res == "apartment") {
    type = "apartment";
  } else {
    type = "locality";
  }

  // apartment = apartment.split(".");
  // apartment = apartment[0];
  // console.log(apartment);

  React.useEffect(() => {
    localStorage.getItem("isLoggedIn") == "true"
      ? setBlurRadius(0)
      : setBlurRadius(5);
      setModalVisible(true)
  }, []);
    React.useEffect(() => {

    const token = localStorage.getItem("idAccessToken");
    // const currentYear = new Date().getFullYear();
    // console.log(currentYear);
token?
    analytics(
      "MY HOME AVATAR",
      // searchText,
      "apartment",
      // type,
      // token
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjY2Y2YzZTFiYTI5ODAwMTY4OGVlMjQiLCJuYW1lIjoiVmlzaGFsIFNvbnkiLCJlbWFpbCI6InZpc2hhbHNvbnlhYmNAZ21haWwuY29tIiwicGhvbmUiOiIrOTE3MjA5NzA0OTIxIiwiaWF0IjoxNjUyMTAzMTMxLCJleHAiOjE2NTQ2OTUxMzF9.Qks6rz5-MQ5WNB2eZRstltWnsUHlstNKOLl0ipuJKZI"
   
    )
      .then((res) => {
        // console.log(res);
        return res;
      })
      .then((items) => {
        const value1 = items;
        // console.log(value1.data.data.areaPrices);
        setData(value1.data)
        setTableVisible(true)
      }):setData([])
    }, []);
    console.log(data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
<>
{/* {blurRadius==0?<></>:} */}
{/* <LoginModel show={blurRadius==0?false:true} /> */}
{/* <div style={{ filter: `blur(${blurRadius}px)` }}></div> */}
    <div >
      <div className="pre-login-model"></div>
      <main className="container-fluid faq-section">
        <HeaderPost />
        <div className="container">
          <div className="company-details">
            <h4 className="company-name">{apartment}</h4>
            <div className="comp-stock-info">
              <div className="m-r-38">
                <p>Market Capital</p>
                <h4>₹ 10 Cr.</h4>
              </div>
              <div className="m-r-38">
                <p>P/E</p>
                <h4>52.14</h4>
              </div>
              <div className="m-r-38">
                <p>Share Price</p>
                <h4>
                  ₹ 26.35{" "}
                  <span className="share-p-status-low">
                    <ArrowDownwardIcon /> -0.05 (-0.19%)
                  </span>{" "}
                </h4>
              </div>
            </div>
          </div>

          <div className="company-tabs-info">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Overview">
                <div className="price-Tab-content">
                  <div className="Price-header-sec">
                    <div className="m-r-38">
                      <p>Price</p>
                      <h4>
                        ₹ 26.35{" "}
                        <span className="share-p-status-high ">
                          <ArrowUpwardIcon /> -0.05 (-0.19%)
                        </span>{" "}
                      </h4>
                    </div>

                    <div className='company-tabs-info'>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Overview">
                                <div className='price-Tab-content'>
                                    <div className='Price-header-sec'>
                                        <div className='m-r-38'>
                                            <p>Price</p>
                                            <h4>₹ 26.35 <span className='share-p-status-high '><ArrowUpwardIcon /> -0.05 (-0.19%)</span> </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='Chart-section'>
                                    <Tabs defaultActiveKey="1D" id="uncontrolled-tab-example" className="">
                                        <Tab eventKey="1D" title="1D">
                                            <div className='competitor-block-sec'>
                                                <div className='comapny-copatitor'>
                                                    <ListGroup horizontal>
                                                        <ListGroup.Item><span><Form.Check checked className='selected-comp' type="radio" aria-label="radio 1" /></span>Cindrella Hotels Ltd
                                                            <span><CloseIcon className='compatitor-remove-btn' /></span> </ListGroup.Item>
                                                        <ListGroup.Item><span><Form.Check className='Competipr-comp-color-1' type="radio" aria-label="radio 1" /></span>ListGroup <span><CloseIcon className='compatitor-remove-btn' /></span> </ListGroup.Item>
                                                        <ListGroup.Item><span><Form.Check className='Competipr-comp-color-2' type="radio" aria-label="radio 1" /></span>renders<span><CloseIcon className='compatitor-remove-btn' /></span> </ListGroup.Item>
                                                        <ListGroup.Item><span><Form.Check className='Competipr-comp-color-3' type="radio" aria-label="radio 1" /></span>horizontally!<span><CloseIcon className='compatitor-remove-btn' /></span> </ListGroup.Item>
                                                    </ListGroup>
                                                </div>
                                                <div className='compatitor-adding'>
                                                    <AddCompetitor />
                                                </div>
                                            </div>

                                            <div className='competitor-chart'>
                                                <div className='dateRangeread'>
                                                    <p>Dec-01-2019 to Jan-20-2022</p>
                                                </div>
                                                <img className='comp-chart-placeholder' src='./compchart.png' />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="1M" title="1M">
                                            
                                        </Tab>
                                        <Tab eventKey="6M" title="6M">
                                            6M
                                        </Tab>
                                        <Tab eventKey="YTD" title="YTD">
                                            YTD
                                        </Tab>
                                        <Tab eventKey="1Y" title="1Y">
                                            1Y
                                        </Tab>
                                        <Tab eventKey="3Y" title="3Y">
                                            3Y
                                        </Tab>
                                        <Tab eventKey="5Y" title="5Y">
                                            5Y
                                        </Tab>
                                        <Tab eventKey="10Y" title="10Y">
                                            10Y
                                        </Tab>
                                        <Tab eventKey="MAX" title="MAX">
                                            MAX
                                        </Tab>
                                    </Tabs>
                                </div>


                                <div className='market-share-sec m-t-60'>
                                    <div className='section-title'>
                                        <h5>Market Share</h5>
                                        <h6>view all <span><ArrowForwardIcon /></span></h6>
                                    </div>
                                    <div className='row '>
                                        <div className='col-md-3'>
                                            <div className='market-share-cards'>
                                                <div className='market-share-chart-box'>
                                                    <img src='./chart-placeholder-sm.png' />
                                                </div>
                                                <div className='ms-metric-current m-t-15'>
                                                    <h4>7.00<span><sub>%</sub></span> <span className='ms-metric-current-duration'>-0.05 (-0.19%)</span> </h4>
                                                </div>
                                                <div className="ms-metric-title">
                                                    Mutual Fund - Market Share
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='market-share-cards'>
                                                <div className='market-share-chart-box'>
                                                    <img src='./chart-placeholder-sm.png' />
                                                </div>
                                                <div className='ms-metric-current m-t-15'>
                                                    <h4>7.00<span><sub>%</sub></span> <span className='ms-metric-current-duration'>-0.05 (-0.19%)</span> </h4>
                                                </div>
                                                <div className="ms-metric-title">
                                                    Mutual Fund - Market Share
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='market-share-cards'>
                                                <div className='market-share-chart-box'>
                                                    <img src='./chart-placeholder-sm.png' />
                                                </div>
                                                <div className='ms-metric-current m-t-15'>
                                                    <h4>7.00<span><sub>%</sub></span> <span className='ms-metric-current-duration'>-0.05 (-0.19%)</span> </h4>
                                                </div>
                                                <div className="ms-metric-title">
                                                    Mutual Fund - Market Share
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='market-share-cards'>
                                                <div className='market-share-chart-box'>
                                                    <img src='./chart-placeholder-sm.png' />
                                                </div>
                                                <div className='ms-metric-current m-t-15'>
                                                    <h4>7.00<span><sub>%</sub></span> <span className='ms-metric-current-duration'>-0.05 (-0.19%)</span> </h4>
                                                </div>
                                                <div className="ms-metric-title">
                                                    Mutual Fund - Market Share
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                              <div className='big-chart-sections m-t-60'>
                                    <div className='section-title m-b-25'>
                                        <h5>Market Share</h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='propq-card-box'>
                                                <p className='prop-card-title'>Segment Break-Up</p>
                                                <div className='big-chart-placeholder'>
                                                    <img src='./big-chart.png' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='propq-card-box'>
                                                <p className='prop-card-title'>Segment Break-Up</p>
                                                <div className='big-chart-placeholder'>
                                                    <img src='./big-chart.png' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='propq-card-box'>
                                                <p className='prop-card-title'>Segment Break-Up</p>
                                                <div className='big-chart-placeholder'>
                                                    <img src='./big-chart.png' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='propq-card-box'>
                                                <p className='prop-card-title'>Segment Break-Up</p>
                                                <div className='big-chart-placeholder'>
                                                    <img src='./big-chart.png' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                                <div className='data-table-section m-t-60'>
                                    <div className='section-title m-b-25'>
                                        <h5>Market Share</h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <DataTable />
                                        </div>
                                        <div className='col-md-6'>
                                            <DataTableBasic />
                                        </div>
                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="profile" title="Dummy">
                                <div className='section-title m-b-25 m-t-20'>
                                    <h5>Market Share</h5>
                                </div>
                                <div className='table-top-section'>
                                    <div className='Tabel-entres'>
                                        <p>Show <span className='entires-form'>
                                            <Form.Select className='select-opion-style'>
                                                <option>10</option>
                                                <option value="1">20</option>
                                                <option value="2">30</option>
                                                <option value="3">40</option>
                                            </Form.Select></span>
                                            entires</p>
                                    </div>
                                    <div className='Tabel-search-filter-sec'>
                                        <div class="form-group has-search table-scrch-input">
                                            <SearchIcon className='search-icon-style' />
                                            <input type="text" class="form-control" placeholder="Search" />
                                        </div>
                                        <span>
                                            <Button variant="outline-primary" className='filter-btn'><FilterListIcon /><span className='d-none d-md-block'>Filter</span></Button>{' '}
                                            {/* <TableFilter /> */}
                                        </span>
                                    </div>
                                </div>
                                <div className='Table-filter-sec'>
                                    <TableFilter />
                                </div>
                                
                                <div className='propq-card-box'>
                                    <Table responsive className='prop-table-sec'>
                                        <thead>
                                            <tr className='prop-table'>
                                                <th>Date</th>
                                                {Array.from({ length: 8 }).map((_, index) => (
                                                    <th key={index}>heading</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className='prop-table-td'>
                                            <tr>
                                                <td>1</td>
                                                {Array.from({ length: 8 }).map((_, index) => (
                                                    <td key={index}>Table cell {index}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                {Array.from({ length: 8 }).map((_, index) => (
                                                    <td key={index}>Table cell {index}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                {Array.from({ length: 8 }).map((_, index) => (
                                                    <td key={index}>Table cell {index}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                {Array.from({ length: 8 }).map((_, index) => (
                                                    <td key={index}>Table cell {index}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                {Array.from({ length: 8 }).map((_, index) => (
                                                    <td key={index}>Table cell {index}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                {Array.from({ length: 8 }).map((_, index) => (
                                                    <td key={index}>Table cell {index}</td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <div className='prop-pagination'>
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">
                                                <li class="page-item disabled">
                                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
 

                            </Tab>
                        </Tabs>
                    </div>

                    </div>

                </div>
                <div className="Chart-section">
                  <Tabs
                    defaultActiveKey="1D"
                    id="uncontrolled-tab-example"
                    className=""
                  >
                    <Tab eventKey="1D" title="1D">
                      <div className="competitor-block-sec">
                        <div className="comapny-copatitor">
                          <ListGroup horizontal>
                            <ListGroup.Item>
                              <span>
                                <Form.Check
                                  checked
                                  className="selected-comp"
                                  type="radio"
                                  aria-label="radio 1"
                                />
                              </span>
                              {/* Cindrella Hotels Ltd */}
                              {apartment}
                              <span>
                                <CloseIcon className="compatitor-remove-btn" />
                              </span>{" "}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <span>
                                <Form.Check
                                  className="Competipr-comp-color-1"
                                  type="radio"
                                  aria-label="radio 1"
                                />
                              </span>
                              ListGroup{" "}
                              <span>
                                <CloseIcon className="compatitor-remove-btn" />
                              </span>{" "}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <span>
                                <Form.Check
                                  className="Competipr-comp-color-2"
                                  type="radio"
                                  aria-label="radio 1"
                                />
                              </span>
                              renders
                              <span>
                                <CloseIcon className="compatitor-remove-btn" />
                              </span>{" "}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <span>
                                <Form.Check
                                  className="Competipr-comp-color-3"
                                  type="radio"
                                  aria-label="radio 1"
                                />
                              </span>
                              horizontally!
                              <span>
                                <CloseIcon className="compatitor-remove-btn" />
                              </span>{" "}
                            </ListGroup.Item>
                          </ListGroup>
                        </div>
                        <div className="compatitor-adding">
                          <AddCompetitor />
                        </div>
                      </div>

                      <div className="competitor-chart">
                        {/* line chart */}
                        {/* <img
                          className="comp-chart-placeholder"
                          src="./compchart.png"
                        /> */}
                        <LineChart
                          searchText={apartment}
                          type={type}
                          yearPeriod={currentYear}
                         
                        />
                        <BarChart
                          searchText={apartment}
                          type={type}
                          yearPeriod={currentYear}
                        />
                      </div>
                    </Tab>
                    <Tab eventKey="1M" title="1M">
                      1M
                    </Tab>
                    <Tab eventKey="6M" title="6M">
                      6M
                    </Tab>
                    <Tab eventKey="YTD" title="YTD">
                      YTD
                    </Tab>
                    <Tab eventKey="1Y" title="1Y">
                      <LineChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={1}
                      />
                      <BarChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={1}
                      />
                    </Tab>
                    <Tab eventKey="3Y" title="3Y">
                      <LineChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={3}
                      />
                      <BarChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={3}
                      />
                    </Tab>
                    <Tab eventKey="5Y" title="5Y">
                      <LineChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={5}
                      />
                      <BarChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={5}
                      />
                    </Tab>
                    <Tab eventKey="10Y" title="10Y">
                      <LineChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={10}
                      />
                      <BarChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={10}
                      />
                    </Tab>
                    <Tab eventKey="MAX" title="MAX">
                      <LineChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={currentYear}
                      />
                      <BarChart
                        searchText={apartment}
                        type={type}
                        yearPeriod={currentYear}
                      />
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Dummy">
                <div className="section-title m-b-25 m-t-20">
                  <h5>Market Share</h5>
                </div>
                <div className="table-top-section">
                  <div className="Tabel-entres">
                    <p>
                      Show{" "}
                      <span className="entires-form">
                        <Form.Select className="select-opion-style">
                          <option>10</option>
                          <option value="1">20</option>
                          <option value="2">30</option>
                          <option value="3">40</option>
                        </Form.Select>
                      </span>
                      entires
                    </p>
                  </div>
                  <div className="Tabel-search-filter-sec">
                    <div class="form-group has-search table-scrch-input">
                      <SearchIcon className="search-icon-style" />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                    <span>
                      <Button variant="outline-primary" className="filter-btn">
                        <span>
                          {" "}
                          <FilterListIcon />
                        </span>
                        Filter
                      </Button>{" "}
                      {/* <TableFilter /> */}
                    </span>
                  </div>
                </div>
                <div className="Table-filter-sec">
                  <TableFilter />
                </div>
                <div className="propq-card-box">

                  {tableVisible?
                  <Table data={data.data}/>
                  // <Table responsive className="prop-table-sec">
                  //   <thead>
                  //     <tr className="prop-table">
                  //       <th>Date</th>
                  //       {data.data.areaPrices.slice(0, 4).map((val) => (
                  //         <th key={val.year}>{val.year}</th>
                  //       ))}
                  //     </tr>
                  //   </thead>
                  //   <tbody className="prop-table-td">
                  //     <tr>
                  //       <td>1</td>
                  //       {data.data.areaPrices.slice(0, 4).map((val) => (
                  //         <td key={val.max}>{val.max}</td>
                  //       ))}
                  //     </tr>
                  //     <tr>
                  //       <td>2</td>
                  //       {data.data.areaPrices.slice(4, 8).map((val) => (
                  //         <td key={val.max}>{val.max}</td>
                  //       ))}
                  //     </tr>
                  //     <tr>
                  //       <td>3</td>
                  //       {data.data.areaPrices.slice(8, 12).map((val) => (
                  //         <td key={val.max}>{val.max}</td>
                  //       ))}
                  //     </tr>
                  //     <tr>
                  //       <td>4</td>
                  //       {data.data.areaPrices.slice(12, 16).map((val) => (
                  //         <td key={val.max}>{val.max}</td>
                  //       ))}
                  //     </tr>
                      
                  //   </tbody>
                  // </Table>
                  :<div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={loader} alt="loader" />
      </div>}

                  {/* <div className="prop-pagination">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                          <a class="page-link" href="#" tabindex="-1">
                            Previous
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div> */}
                </div>
              </Tab>
            </Tabs>
            <div className="market-share-sec m-t-60">
              <div className="section-title">
                <h5>Market Share</h5>
                <h6>
                  view all{" "}
                  <span>
                    <ArrowForwardIcon />
                  </span>
                </h6>
              </div>
              <div className="row ">
                <div className="col-md-3">
                  <div className="market-share-cards">
                    <div className="market-share-chart-box">
                      <img src="./chart-placeholder-sm.png" />
                    </div>
                    <div className="ms-metric-current m-t-15">
                      <h4>
                        7.00
                        <span>
                          <sub>%</sub>
                        </span>{" "}
                        <span className="ms-metric-current-duration">
                          -0.05 (-0.19%)
                        </span>{" "}
                      </h4>
                    </div>
                    <div className="ms-metric-title">
                      Mutual Fund - Market Share
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="market-share-cards">
                    <div className="market-share-chart-box">
                      <img src="./chart-placeholder-sm.png" />
                    </div>
                    <div className="ms-metric-current m-t-15">
                      <h4>
                        7.00
                        <span>
                          <sub>%</sub>
                        </span>{" "}
                        <span className="ms-metric-current-duration">
                          -0.05 (-0.19%)
                        </span>{" "}
                      </h4>
                    </div>
                    <div className="ms-metric-title">
                      Mutual Fund - Market Share
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="market-share-cards">
                    <div className="market-share-chart-box">
                      <img src="./chart-placeholder-sm.png" />
                    </div>
                    <div className="ms-metric-current m-t-15">
                      <h4>
                        7.00
                        <span>
                          <sub>%</sub>
                        </span>{" "}
                        <span className="ms-metric-current-duration">
                          -0.05 (-0.19%)
                        </span>{" "}
                      </h4>
                    </div>
                    <div className="ms-metric-title">
                      Mutual Fund - Market Share
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="market-share-cards">
                    <div className="market-share-chart-box">
                      <img src="./chart-placeholder-sm.png" />
                    </div>
                    <div className="ms-metric-current m-t-15">
                      <h4>
                        7.00
                        <span>
                          <sub>%</sub>
                        </span>{" "}
                        <span className="ms-metric-current-duration">
                          -0.05 (-0.19%)
                        </span>{" "}
                      </h4>
                    </div>
                    <div className="ms-metric-title">
                      Mutual Fund - Market Share
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="big-chart-sections m-t-60">
              <div className="section-title m-b-25">
                <h5>Market Share</h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="propq-card-box">
                    <p className="prop-card-title">Segment Break-Up</p>
                    <div className="big-chart-placeholder">
                      <img src="./big-chart.png" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="propq-card-box">
                    <p className="prop-card-title">Segment Break-Up</p>
                    <div className="big-chart-placeholder">
                      <img src="./big-chart.png" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="propq-card-box">
                    <p className="prop-card-title">Segment Break-Up</p>
                    <div className="big-chart-placeholder">
                      <img src="./big-chart.png" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="propq-card-box">
                    <p className="prop-card-title">Segment Break-Up</p>
                    <div className="big-chart-placeholder">
                      <img src="./big-chart.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="data-table-section m-t-60">
              <div className="section-title m-b-25">
                <h5>Market Share</h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <DataTable />
                </div>
                <div className="col-md-6">
                  <DataTableBasic />
                </div>
              </div>
            </div>
          </div>
          <Tab eventKey="profile" title="Dummy">
            Empty
          </Tab>
          <hr className="seperator" />
          <Container className="footer-section">
            <Footer />
          </Container>
        </div>
      </main>
    </div>
    </>
  );
}
