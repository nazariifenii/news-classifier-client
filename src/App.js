import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Nav, Alert, PrivateRoute } from "./_components";
import { accountService } from "./_services";
import { Home } from "./home";
import { Account } from "./account";
import { Profile } from "./profile";
import { Admin } from "./admin";
import { Classificator } from "./classificator";
import { Role } from "./_helpers";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe((x) => setUser(x));
    return subscription.unsubscribe;
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
      <Alert></Alert>
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/classificator" component={Classificator} />
        <PrivateRoute path="/archive" component={Profile} />
        <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
        <Route path="/account" component={Account} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
