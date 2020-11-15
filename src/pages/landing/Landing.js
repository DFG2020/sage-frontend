import React, { useState } from "react";
import { Input, Layout, Button, Modal, Typography } from "antd";
import "./Landing.css";
import { ReactComponent as SageLogo } from "./sage.svg";
import NewClient from "../../components/modals/new-client/NewClient";

const Landing = () => {
  const [newClientModalOpen, setNewClientModalOpen] = useState(false);

  const onSearch = (e) => {
    console.log(e.target);
  };

  const newClient = () => {
    setNewClientModalOpen(true);
  };

  const handleOk = () => {
    // send api call to create the new client. Then add it to the table
    // console.log(e);
    setNewClientModalOpen(false);
  };

  const handleCancel = () => {
    // Do nothing
    setNewClientModalOpen(false);
  };

  return (
    <Layout className="layout" style={{ background: "white" }}>
      <Layout.Content style={{ padding: "10rem 25rem" }}>
        <div className="site-layout-content">
          <Typography.Title className="sageTitle">
            <SageLogo />
            Sage
          </Typography.Title>
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
      <Modal
        title="Add a new client"
        visible={newClientModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="70rem"
      >
        {/* new client modal. Should pass in hook to make the api all */}
        <NewClient />
      </Modal>
    </Layout>
  );
};

export default Landing;
