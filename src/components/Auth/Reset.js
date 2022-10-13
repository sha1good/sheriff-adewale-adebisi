import React, {useState } from "react";
import useAuthForm from "../../hooks/useAuthForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import  classes from "./Reset.module.css";
import ErrorModal from "../UI/ErrorModal";


function Reset() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    resetForm: resetEmailForm,
    valueChangeHandler: emailChangeHandler,
    onBlurChangeHandler: emailOnBlurHandler,
  } = useAuthForm((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (enteredEmailIsValid) {
    formIsValid = true;
  }
 //const emailClasses = emailHasError ? "form-control invalid" : "form-control";

 const sendPasswordResetEmail =async(event)=>{
     event.preventDefault();

     if(!formIsValid){
          return;
     }

     setIsLoading(true);
     setError(false);

     let url = "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD-pVzNEVIiUhXh88mhQW2crYl5yX-uecw";
     try {
         const response =await fetch(url,{
                method : "POST",
                body: JSON.stringify({
                    email : enteredEmail,
                   "requestType":"PASSWORD_RESET"
                }),
                headers :{
                    "Content-Type": "application/json"
                }
            });

        if(!response.ok){
             throw new Error("Something went wrong !");
        }  
     const data = await response.json();
       console.log(data); 
       history.push("/");      
     } catch (error) {
      setError(error.message);  
     }

    setIsLoading(false);
    resetEmailForm();
 }

const removeErrorHandler = () =>{
     setError(null);
}

  return (
    <form onSubmit={sendPasswordResetEmail}>
    <div className={classes.reset}>
      <div className="resetContainer">
        <input
          type="text"
          className={classes.resetTextBox}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
          placeholder="E-mail Address"
        />
         {emailHasError && (
          <p className="error-text">Please enter a valid email Address</p>
        )}
        <button className={classes.resetBtn}>Send</button>
        {!isLoading && error &&  <ErrorModal message={error} removeError={removeErrorHandler}/>}
        {isLoading && <p>Sending Request ...</p>}
        <div>
          Don't have an account? <Link to="/auth">Register</Link> now.
        </div>
      </div>
    </div>
    </form>  
  );
}
export default Reset;