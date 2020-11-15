import React, { useState } from "react";
import { Layout, Table, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddMail from "../../components/modals/add-mail/AddMail";
import "./MailResults.css";

const dataSource = [
  {
    key: "1",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "2",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "3",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "4",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "5",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "6",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "7",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "8",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "9",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "10",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
  {
    key: "11",
    sender: "Mike",
    comments: "Lorem Ipsum",
    initials: "XY",
    status: "Pending Pickup",
    received: "2020-10-09 09:10:05",
    type: "Mail",
    signature: "n/a",
    datePickedUp: "n/a",
  },
];

const columns = [
  {
    title: "Sender",
    dataIndex: "sender",
    key: "sender",
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
  },
  {
    title: "Staff Initials",
    dataIndex: "initials",
    key: "initials",
  },
  {
    title: "Status of Package",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Received Date",
    dataIndex: "received",
    key: "received",
  },
  {
    title: "Type of Package",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Pick up Signature",
    dataIndex: "signature",
    key: "signature",
  },
  {
    title: "Date picked Up",
    dataIndex: "datePickedUp",
    key: "datePickedUp",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <p>Update</p>, // open modal on click
  },
];

const MailResults = () => {
  const [newMailModalOpen, setNewMailModalOpen] = useState(false);
  const name = "LeBron James"; // to be fetched from the backend

  const newMail = () => {
    setNewMailModalOpen(true);
  };

  const handleOk = (e) => {
    // send api call to create new mail. Then add it to the table
    console.log(e);
    setNewMailModalOpen(false);
  };

  const handleCancel = () => {
    // Do nothing
    setNewMailModalOpen(false);
  };

  return (
    <Layout className="layout">
      <Layout.Content style={{ padding: "5rem 5rem" }}>
        <p>
          {`${name}'s Mail`}
          <Button
            icon={<PlusOutlined />}
            type="primary"
            className="newMailButton"
            onClick={newMail}
          >
            {/* open modal on click */}
            New Mail
          </Button>
        </p>

        {/* </span> */}
        <Table dataSource={dataSource} columns={columns} />
      </Layout.Content>
      <Modal
        title="Add Mail"
        visible={newMailModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddMail />
      </Modal>
    </Layout>
  );
};

export default MailResults;
