import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../components/widget/Widget";
import Datatable from "../../components/datatable/Datatable";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <Widget type="user" />
        <Widget type="useractive" />
        <Widget type="userwithloans" />
        <Widget type="userwithsavings" />
        </div>
        <Datatable />
      </div>
    </div>
  );
};

export default Home;
