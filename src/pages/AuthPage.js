import React from "react";
import Auth from "../components/Auth/Auth";
import Welcome from "./Welcome";
import classes  from "./AuthPage.module.css";
import Layout from "../components/Layout/Layout";

const AuthPage = () => {
  return <React.Fragment>
  <Layout /> 
  <div className={classes.row}>
     <section className={classes.column}>
          <Welcome />
       </section>
       <section className={classes.auth}>
           <Auth />;
       </section> 
        
     </div> 
</React.Fragment>
};

export default AuthPage;
