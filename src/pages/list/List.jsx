import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Widget from "../../components/widget/Widget";

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="useractive" />
          <Widget type="userwithloans" />
          <Widget type="userwithsavings" />
        </div>
       <Datatable/>
      </div>
    </div>
  )
}

export default List