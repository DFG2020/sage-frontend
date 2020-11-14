import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import '../App.css';

const Nav = () => {
  return (
    <Router>
      <Menu theme="light" mode="horizontal">
        <Menu.Item>
          <Route exact path="/">
            <Link to="/search">Home</Link>
          </Route>
        </Menu.Item>
        <Menu.Item>
          <Route exact path="/search">
            <Link to="/search">Search</Link>
          </Route>
        </Menu.Item>
      </Menu>
    </Router>
  );
};

export default Nav;
