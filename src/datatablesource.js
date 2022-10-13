import moment from "moment";

export const userColumns = [
  { field: "orgName", headerName: "ORGANIZATION", width: 230},
  {
    field: "userName",
    headerName: "USERNAME",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         {params.row.userName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phoneNumber",
    headerName: "PHONENUMBER",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "DATE JOINED",
    width: 230,
    renderCell: (params) => {
      return (moment(params.row.createdAt).format('lll'));
    },
  },
  
];

 export const actionStatusRow =[
  {
    id: 1,
    inactive : "Inactive"
  },
  { 
    id : 2,
    pending : "Pending"
  },
   {  id: 3,
    active : "Active"
  },
   {
    id : 4,
    blaklisted : "Blacklisted"
  }
]


