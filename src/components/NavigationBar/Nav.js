import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Menu } from "antd";
import { Landing, NewClient } from "../../pages";

const Nav = () => {
  return (
    <Router>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link to="/">Sage</Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/add" component={NewClient} />
      </Switch>
    </Router>
  );
};

export default Nav;