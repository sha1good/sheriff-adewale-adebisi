import React from "react";
import  welcomeImage from "../images/welcome.png";
import classes from './Welcome.module.css';


 const Welcome = (props) =>{
    return <React.Fragment>
         <div className={classes.welcome}>
               <img src={welcomeImage} alt="Welcome to  LendSqr" />
          </div>
   </React.Fragment>
    
 }

export default Welcome;