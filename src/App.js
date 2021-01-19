import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Components/Headers/Headers";
import VolunteerItems from "./Components/VolunteerItems/VolunteerItems";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import VolunteerLogo from "./Components/VolunteerLogo/VolunteerLogo";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminPanal from "./Components/AdminPanal/AdminPanal";
import EventRegistration from "./Components/EventRegistration/EventRegistration";
import Events from "./Components/Events/Events";
import NotCreate from "./Components/notCreate/NotCreate";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Headers></Headers>
            <VolunteerItems></VolunteerItems>
          </Route>
          <Route exact path="/home">
            <Headers></Headers>
            <VolunteerItems></VolunteerItems>
          </Route>
          <Route exact path="/donation">
            <NotCreate />
          </Route>
          <Route exact path="/blog">
            <NotCreate />
          </Route>
          <Route path="/login">
            <VolunteerLogo></VolunteerLogo>
            <Login></Login>
          </Route>
          <PrivateRoute path="/registration/:eventId">
            <VolunteerLogo></VolunteerLogo>
            <RegisterForm></RegisterForm>
          </PrivateRoute>
          <Route path="/admin">
            <AdminPanal></AdminPanal>
          </Route>
          <PrivateRoute path="/event">
            <EventRegistration></EventRegistration>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
