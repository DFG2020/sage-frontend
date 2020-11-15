import React from "react";
import { Form, Input, Row, Col } from "antd";
import axios from "axios";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 12,
  },
};
const validateMessages = {
  required: "${label} is required!",
};

const NewClient = ({addClientIDToState}) => {
  const onFinish = (values) => {
    console.log(values);
    axios.post('http://localhost:8000/api/user', {
      firstName: `${values.clientFirstName}`,
      lastName: `${values.clientLastName}`,
      middleName: `${values.clientMiddleName}`,
      forwardAddressLine: `${values.forwardingAddress}`,
      authorizedPickupFirstName: `${values.authFirstName}`,
      authorizedPickupLastName: `${values.authLastName}`,
      profile_image_id: ``
    }).then((response) => {
      addClientIDToState(response.data.userId);
      console.log(response);
    }).catch((err) => {
      alert(`Network error creating profile contact IT! msg: ${err}`);
    })
  };

  return (
    <div>
      <Row
        style={{
          background: "white",
          margin: "1rem 4rem",
          padding: "1rem 0rem",
        }}
      >
        <Col style={{ padding: "0rem 1rem" }} span={16}>
          <Form
            {...layout}
            name="newClientForm"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="clientFirstName"
              label="Client First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="clientLastName"
              label="Client Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="clientMiddleName"
              label="Client Middle Name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="forwardingAddress"
              label="Forwarding Address"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="authFirstName"
              label="Authorized Pick-up Contact First Name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="authLastName"
              label="Authorized Pick-up Contact Last Name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="authMiddleName"
              label="Authorized Pick-up Contact Middle Name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewClient;
