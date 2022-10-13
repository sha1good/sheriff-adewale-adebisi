import React from "react";
import Layout from "../Layout/Layout";
import classes from "./StartingPageContent.module.css";


const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
     <Layout />
       <h1>Welcome To LendSqr</h1>
    </section>
  );
};

export default StartingPageContent;
