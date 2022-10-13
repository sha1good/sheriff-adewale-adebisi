import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/auth-context"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
   <AuthContextProvider>
    <DarkModeContextProvider>
     <BrowserRouter>
     <App />
     </BrowserRouter>
    </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
