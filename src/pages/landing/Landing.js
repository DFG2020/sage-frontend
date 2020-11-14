import React from "react";
import { Input, Layout, Button } from "antd";
import "./Landing.css";

const Landing = () => {
  const onSearch = (e) => {
    console.log(e.target);
  };

  const newClient = () => {
    console.log("open new client modal here");
  };

  return (
    <Layout className="layout">
      <Layout.Content style={{ padding: "25rem 25rem" }}>
        <div className="site-layout-content">
          <Input.Search
            placeholder="Search by Name"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            style={{ margin: "16px 0" }}
          />
          <Button
            type="primary"
            shape="round"
            size="large"
            className="newClientButton"
            onClick={newClient}
          >
            New Client
          </Button>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Landing;
