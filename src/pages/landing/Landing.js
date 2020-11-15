import React, { useState } from "react";
import { Input, Layout, Button, Modal, Typography } from "antd";
import "./Landing.css";
import { ReactComponent as SageLogo } from "./sage.svg";
import NewClient from "../../components/modals/new-client/NewClient";
import { Avatar } from "../../components";

const Landing = () => {
  const [newClientModalOpen, setNewClientModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [newClientID, setNewClientID] = useState("");
  const modalScreen = [<NewClient addClientIDToState={setNewClientID} />, 
    <Avatar newClientID={newClientID} />];
  
  const onSearch = (e) => {
    console.log(e.target);
  };

  const newClient = () => {
    setNewClientModalOpen(true);
  };

  const handleOk = () => {
    // send api call to create the new client. Then add it to the table
    if(modalIndex === 0) {
      setTimeout(() => {
        setModalIndex(1);
      }, 200);
    } else {
      setNewClientModalOpen(false);
      setModalIndex(0);
    }
  };

  const handleCancel = () => {
    // Do nothing
    setNewClientModalOpen(false);
    setModalIndex(0);
    setNewClientID("");
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
        // eslint-disable-next-line max-len
        okButtonProps={modalIndex === 0 ? {form:'newClientForm', key: 'submit', htmlType: 'submit'} : {htmlType: 'button'}}
        okText="Next"
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
        width="70rem"
      >
        {/* new client modal. Should pass in hook to make the api all */}
        {modalScreen[modalIndex]}
      </Modal>
    </Layout>
  );
};

export default Landing;
