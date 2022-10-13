import React,{useEffect, useState} from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UserDetails from "./UserDetails";
import { useParams } from "react-router-dom";
import ErrorModal from "../../components/UI/ErrorModal";

const Single = () => {

  let {userId} = useParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpErrors, setHttpErrors]  =  useState();

  useEffect(() => {
    const  fetchUsers = async () =>{
       const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`);

       if(!response.ok){
         throw new Error("Something went wrong!");
       }
      const responseData = await response.json();  

      console.log(responseData);
    
      let loadedData = [];
   
        loadedData.push({
            id : responseData.id,
            orgName : responseData.orgName,
            userName : responseData.userName,
            email : responseData.email,
            createdAt: responseData.createdAt,
            lastActiveDate : responseData.lastActiveDate,
            accountBalance : responseData.accountBalance,
            accountNumber : responseData.accountNumber,
            addressProfile : responseData.profile.address,
            avatar : responseData.profile.avatar,
            bvn : responseData.profile.bvn,
            currency : responseData.profile.currency,
            firstName : responseData.profile.firstName,
            lastName : responseData.profile.lastName,
            gender : responseData.profile.gender,
            phoneNumber : responseData.profile.phoneNumber,
           level : responseData.education.level,
           employmentStatus : responseData.education.employmentStatus,
           sector : responseData.education.sector,
           officeEmail : responseData.education.officeEmail,
           loanRepayment : responseData.education.loanRepayment,
           duration : responseData.education.duration,
           highestMonthlyIncome : responseData.education.monthlyIncome[0],
           lowestMonthlyIncome : responseData.education.monthlyIncome[1],
           guarantorAddress : responseData.guarantor.address,
           guarantorFirstName : responseData.guarantor.firstName,
           guarantorGender : responseData.guarantor.gender,
           guarantorLastName : responseData.guarantor.lastName,
           guarantorPhoneNumber : responseData.guarantor.phoneNumber,
           facebook : responseData.socials.facebook,
           instagram : responseData.socials.instagram,
           twitter : responseData.socials.twitter,
           
          })
      
      setUsers(loadedData);
      setIsLoading(false);  
      }
      
    

   fetchUsers().catch((error) =>{
    setIsLoading(false);
    setHttpErrors(error.message);
   });
}, [userId])

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

 const userDetailsList = users.map((user)=>{
  return (
     <UserDetails 
        key={user.id}
        id = {user.id}
        orgName ={user.orgName}
        userName  ={user.userName}
        email  = {user.email}
        createdAt= {user.createdAt}
        lastActiveDate = {user.lastActiveDate}
        accountBalance  = {user.accountBalance}
        accountNumber = {user.accountNumber}
        addressProfile = {user.addressProfile}
        loanRepayment ={user.loanRepayment}
        avatar = {user.avatar}
        bvn = {user.bvn}
        currency = {user.currency}
        firstName = {user.firstName}
        lastName = {user.lastName}
        gender = {user.gender}
        phoneNumber = {user.phoneNumber}
        level = {user.level}
        employmentStatus = {user.employmentStatus}
        sector = {user.sector}
        officeEmail = {user.officeEmail}
        highestMonthlyIncome = {user.highestMonthlyIncome}
        lowestMonthlyIncome = {user.lowestMonthlyIncome}
        guarantorAddress = {user.guarantorAddress}
        duration = {user.duration}
        guarantorFirstName = {user.guarantorFirstName}
        guarantorGender = {user.guarantorGender}
        guarantorLastName = {user.guarantorLastName}
        guarantorPhoneNumber = {user.guarantorPhoneNumber}
        facebook = {user.facebook}
        instagram = {user.instagram}
        twitter = {user.twitter}
          
        />
  );
});

 return (
  <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
       <div>{userDetailsList}</div>
       
   </div>
  </div>

 )
}
export default Single;
