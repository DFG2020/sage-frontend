import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Menu } from "antd";
import {Landing, MailResults, ClientList} from "../../pages"
import { NewClient } from "../modals";
import "./nav.css"

const Nav = () => {
  return (
    <Router>
      <Menu theme="light" mode="horizontal" id="white-space-bottom">
        <Menu.Item>
          <Link to="/">Sage</Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/add" component={NewClient} />
        <Route exact path="/clients" component={ClientList} />
        <Route exact path="/mail" component={MailResults} />
      </Switch>
    </Router>
  );
};

export default Nav;
