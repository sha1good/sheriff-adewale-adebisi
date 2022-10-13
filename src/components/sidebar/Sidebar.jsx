import "./sidebar.scss";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
//import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HandshakeIcon from '@mui/icons-material/Handshake';
import laonImage from "../../images/loan.png";
import SavingsIcon from '@mui/icons-material/Savings';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import lendsqrImage from "../../images/Union.png";
import feesAndChargesImage from "../../images/dollar.png";
import transactionChargesImage from "../../images/transaction.png";
import servicesImage from "../../images/technical-support.png";
import settlementImage from "../../images/payment.png";
import preferenceImage from "../../images/filter.png";
import priceImage from "../../images/expensive.png";
import auditImage from "../../images/audit.png";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext } from "react";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const requestLoanstyle = {
    color :'black',
    fontSize :'18px',
    width : '10%',
    height : '10%'
 }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
         <span><img src={lendsqrImage} alt="lendsqr" className="logoimage"/></span>
         <span className="logo">Lendsqr</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
        <li>
            <BusinessCenterIcon className="icon" />
            <span>Switch Organization</span>
            <ArrowDropDownIcon className="icon" />
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
            <span style={{margin : '10px '}}>Dashboard</span>
          </li>
          <p className="title">CUSTOMERS</p>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Guarantors</span>
            </li>
          </Link>
          <li>
            <MonetizationOnIcon className="icon" />
            <span>Loans</span>
          </li>
          <li>
            <HandshakeIcon className="icon" />
            <span>Decision Models</span>
          </li>
          <li>
            <SavingsIcon className="icon" />
            <span>Savings</span>
          </li>
          <li>
            <img src={laonImage} alt="" style={requestLoanstyle} />
            <span>Loan Requests</span>
          </li>
          <li>
            <PersonAddIcon className="icon"/>
            <span>Whitelist</span>
          </li>
          <li>
            <PersonRemoveIcon className="icon"/>
            <span>Karma</span>
          </li>
           
          <p className="title">BUSINESSES</p>
          <li>
            <BusinessCenterIcon className="icon" />
            <span>Organization</span>
          </li>
          <li>
          <img src={laonImage} alt="" style={requestLoanstyle} />
            <span>Loan Products</span>
          </li>
          <li>
            <WarehouseIcon className="icon" />
            <span>Savings Products</span>
          </li>
          <li>
          <img src={feesAndChargesImage} alt="" style={requestLoanstyle} />
            <span>Fees and Charges</span>
          </li>
          <li>
          <img src={transactionChargesImage} alt="" style={requestLoanstyle} />
            <span>Transactions</span>
          </li>
          <li>
          <img src={servicesImage} alt="" style={requestLoanstyle} />
            <span>Services</span>
          </li>
          <li>
            <ManageAccountsIcon className="icon" />
            <span>Service Account</span>
          </li>
          <li>
          <img src={settlementImage} alt="" style={requestLoanstyle} />
            <span>Settlements</span>
          </li>
         <li>
            <InsertChartIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">SETTINGS</p>
          <li>
          <img src={preferenceImage} alt="" style={requestLoanstyle} />
            <span>Preferences</span>
          </li>
          <li>
          <img src={priceImage} alt="" style={requestLoanstyle} />
            <span>Logs</span>
          </li>
          <li>
          <img src={auditImage} alt="" style={requestLoanstyle} />
            <span>Audit Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
