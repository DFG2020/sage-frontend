import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Menu } from "antd";
import {Landing, NewClient, ClientList} from "../../pages"
import "./nav.css"

const Nav = () => {
  return (
    <Router>
      <Menu theme="light" mode="horizontal" id="white-space-bottom">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/add" component={NewClient} />
        <Route exact path="/clients" component={ClientList} />
      </Switch>
    </Router>
  );
};

export default Nav;
