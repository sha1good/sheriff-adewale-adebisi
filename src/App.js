import Dashboard from "./pages/dashboard/dasboard";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Reset from "./components/Auth/Reset";
import { Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import AuthContext from "./context/auth-context";
import React from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const authCtx = useContext(AuthContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <React.Fragment>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
         </Routes>
        <Routes>
          <Route path="/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/users">
              <Route index element={<List />} />
              <Route path="/dashboard/users:userId" element={<Single />} />
            </Route>
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" index element={<AuthPage />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/reset" index element={<Reset />} />
          )}
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
