import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Nav = () => {
  return (
    <Menu theme="light" mode="horizontal" style={{ borderBottom: 0 }}>
      <Menu.Item>
        <Link to="/login">Nav!</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
