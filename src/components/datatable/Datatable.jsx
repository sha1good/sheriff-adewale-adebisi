import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import ErrorModal from "../UI/ErrorModal";

const Datatable = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpErrors, setHttpErrors]  =  useState();
  

  useEffect(() => {
       const  fetchUsers = async () =>{
          const response = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");

          if(!response.ok){
            throw new Error("Something went wrong!");
          }
         const responseData = await response.json();  

         console.log(responseData);
       
         let loadedData = [];

         for(const key in responseData){
           loadedData.push({
               id : responseData[key].id,
               orgName : responseData[key].orgName,
               userName : responseData[key].userName,
               email : responseData[key].email,
               phoneNumber :  responseData[key].phoneNumber,
               createdAt: responseData[key].createdAt,
               lastActiveDate : responseData[key].lastActiveDate,
           })
         }
         setUsers(loadedData);
         setIsLoading(false);  
       };

      fetchUsers().catch((error) =>{
       setIsLoading(false);
       setHttpErrors(error.message);
      });
  }, [])

  const removeErrorHandler = () =>{
   setHttpErrors(null);
}
  if(isLoading){
      return (
        <section className="userIsLoading">
           <p> Loading ...</p>
        </section>
      )
  }

  if(httpErrors){
     return (
         <section className="usersError">
           <ErrorModal message={httpErrors}  removeError={removeErrorHandler}/>
         </section>
     )
  }

  
  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const  actionStatusRow = ["Inactive", "Pending","Active","Blacklisted"];
  const actionStatusRows = new Array(100).fill(actionStatusRow[0]);
  const newObject = users.map((item, i)=>({...item, status:actionStatusRows[i]}));
  

console.log(newObject);
  
  const actionColumn = [
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/dashboard/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View Details</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete User
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        key={users.id}
        rows={newObject}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
