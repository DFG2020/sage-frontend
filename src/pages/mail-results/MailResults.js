import React, { useContext, useState, useEffect } from "react";
import { Layout, Table, Button, Modal } from "antd";
import axios from "axios";
// import moment from "moment";
import { PlusOutlined } from "@ant-design/icons";
import AddMail from "../../components/modals/add-mail/AddMail";
import { ClientIdContext } from "../../context"
import "./MailResults.css";

const columns = [
  {
    title: "Sender",
    dataIndex: "fulfillmentProvider",
    key: "fulfillmentProvider",
  },
  {
    title: "Comments",
    dataIndex: "comment",
    key: "comments",
  },
  {
    title: "Staff Initials",
    dataIndex: "staffInitial",
    key: "staffInitial",
  },
  {
    title: "Status of Package",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Received Date",
    dataIndex: "receivedDateTimeMs",
    key: "receivedDateTimeMs",
  },
  {
    title: "Type of Package",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Pick up Signature",
    dataIndex: "signatureImageId",
    key: "signatureImageId",
  },
  {
    title: "Date picked Up",
    dataIndex: "pickedUpDateTimeMs",
    key: "pickedUpDateTimeMs",
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
  // eslint-disable-next-line no-unused-vars
  const [mailList, setMailList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [dataLoading, setDataLoading] = useState(true);
  const [clientId, setClientId] = useContext(ClientIdContext);
  setClientId(123)
  const mailObjectList = []

  useEffect(() => {
    axios.get(`http://localhost:8000/api/mail/user/${clientId}`, {})
    .then((response) => {
      for(let i = 0; i < response.data.length; i += 1){
        mailObjectList.push(response.data[i]?.mail);
        if(i === response.data.length - 1){
          setDataLoading(false)
          setMailList(mailObjectList);
        }
      }
    });
  }, [dataLoading]);

  // const convertMSTimeToDate = () => {
  //   // const convertedMailList = [];
  //   console.log(mailList);
  //   for(let i = 0; i <= mailList.length; i += 1) {
  //     const copiedMailItem = mailList[i];
  //     const mailRecievedMS = copiedMailItem.receivedDateTimeMs;
  //     copiedMailItem.receivedDateTimeMs = moment(mailRecievedMS).format("DD MM YYYY");
  //     console.log(copiedMailItem.receivedDateTimeMs);
  //     // if(copiedMailItem.pickedUpDateTimeMs){

  //     // }
  //   }
  //   return mailList
  // }

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
    <Layout className="layout" style={{ background: "white" }}>
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
        <Table dataSource={mailList} columns={columns} />
      </Layout.Content>
      <Modal
        title="Add Mail"
        visible={newMailModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="70rem"
        okButtonProps={{form:'addMailForm', key: 'submit', htmlType: 'submit'}}
      >
        <AddMail />
      </Modal>
    </Layout>
  );
};

export default MailResults;
