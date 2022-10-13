import React, { useState } from "react";
import "./userDetails.scss";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const UserDetails = (props) => {
  const [isTouched, setIsTouched] = useState(false);

  const switchToggleHandler = () => {
    setIsTouched((prevState) => !prevState);
  };


   const userStlye ={
    'padding-left': '12px',
}

const typeOfResidence ={
  'padding-left': '50px',
}
 
return (
    <div className="top">
      <div className="left">
        <div className="item">
          <img src={props.avatar} alt="" className="itemImg" />
          <div className="details">
            <h1 className="itemTitle">
              {props.firstName}
              <span className="itemTit">{props.lastName}</span>
            </h1>
            <div className="detailItem">
              <span className="itemValue">{props.accountNumber}</span>
            </div>
          </div>
          <div className="details">
            <div className="v1"></div>
            <h4 className="userTiers">User's Tier</h4>
            <StarOutlineIcon className="userStars"></StarOutlineIcon>
            <StarOutlineIcon className="userStars"></StarOutlineIcon>
            <StarOutlineIcon className="userStars"></StarOutlineIcon>
            <div className="v2"></div>
          </div>
          <div className="details">
            <h1 className="itemTitle">#200,000.00</h1>
            <div className="detailItem">
              <span className="itemValue">9971234578/Providus Bank</span>
            </div>
          </div>
        </div>
        <div className="generalDetails">
          <div className="generalDetail" onClick={switchToggleHandler}>
            General Details
          </div>
          <div className="document">Documents</div>
          <div className="banks">Bank Details</div>
          <div className="loan">Loans</div>
          <div className="savings">Savings</div>
          <div className="appsystem">App and System</div>
        </div>

        {isTouched && (
          <div className="container">
            <div className="title">
              Personal Information
              <div className="row">
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">FULL NAME</h2>
                  <div className="dataContainerRow">
                    {props.firstName}
                    <span className="fullname">{props.lastName}</span>
                  </div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">PHONE NUMBER</h2>
                  <div className="dataContainerRow">{props.phoneNumber}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">EMAIL ADDRESS</h2>
                  <div className="dataContainerRow">{props.email}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">BVN</h2>
                  <div className="dataContainerRow">{props.bvn}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">GENDER</h2>
                  <div className="dataContainerRow">{props.gender}</div>
                </div>
              </div>
              <div className="row">
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">MARITAL STATUS</h2>
                  <div className="dataContainerRow">Single</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle" style={userStlye}>CHILDREN</h2>
                  <div className="dataContainerRow" style={userStlye}>NONE</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle" style={typeOfResidence}>TYPE OF RESIDENCE</h2>
                  <div className="dataContainerRow" style={typeOfResidence}>Parent's Apartment</div>
                </div>
              </div>
              <hr className="hr" />
            </div>
            <div className="title">
              Education and Employment
              <div className="row">
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">LEVEL OF EDUCATION</h2>
                  <div className="dataContainerRow">
                  {props.level}
                  </div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">EMPLOYMENT STATUS</h2>
                  <div className="dataContainerRow">{props.employmentStatus}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">SECTOR OF EMPLOYMENT</h2>
                  <div className="dataContainerRow">{props.sector}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">DURATION OF EMPLOYMENT</h2>
                  <div className="dataContainerRow">{props.duration}</div>
                </div>
              </div>
              <div className="row">
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">OFFICIAL EMAIL</h2>
                  <div className="dataContainerRow">{props.officeEmail}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle" style={userStlye}>MONTHLY INCOME</h2>
                  <div className="dataContainerRow" style={userStlye}>#{props.lowestMonthlyIncome}-#{props.highestMonthlyIncome}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle" style={typeOfResidence}>LOAN REPAYMENT</h2>
                  <div className="dataContainerRow" style={typeOfResidence}>{props.loanRepayment}</div>
                </div>
              </div>
              <hr className="hr" />
            </div>
            <div className="title">
              Socials
              <div className="row">
               <div className="dataContainer">
                  <h2 className="dataContainerTitle">TWITTER</h2>
                  <div className="dataContainerRow">{props.twitter}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">FACEBOOK</h2>
                  <div className="dataContainerRow">{props.facebook}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">INSTAGRAM</h2>
                  <div className="dataContainerRow">{props.instagram}</div>
                </div>
              </div>
              <hr className="hr" />
            </div>
            <div className="title">
              Guarantor
              <div className="row">
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">FULL NAME</h2>
                  <div className="dataContainerRow">
                    {props.guarantorFirstName}
                    <span className="fullname">{props.guarantorLastName}</span>
                  </div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">PHONE NUMBER</h2>
                  <div className="dataContainerRow">{props.guarantorPhoneNumber}</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">EMAIL ADDRESS</h2>
                  <div className="dataContainerRow">debby@gmail.com</div>
                </div>
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">RELATIONSHIP</h2>
                  <div className="dataContainerRow">Sister</div>
                </div>
              </div>
              <div className="row">
                <div className="dataContainer">
                  <h2 className="dataContainerTitle">GENDER</h2>
                  <div className="dataContainerRow">{props.guarantorGender}</div>
                </div>
              </div>
             </div>
           </div>
          
        )}
      </div>
    </div>
  );
};

export default UserDetails;
