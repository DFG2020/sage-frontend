import React from "react";
import moment from 'moment';
import { Form, Input, Row, Col, DatePicker } from "antd";

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

function handleDateChange(date, dateString) {
  console.log(date, dateString);
}

function disabledFutureDate(current) {
  // Can not select days before today and today
  return current > moment().endOf('day');
}

const AddMail = () => {
  const onFinish = (values) => {
    console.log(values);
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
            name="addMailForm"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="clientName"
              label="Client Name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input readOnly />
            </Form.Item>
            <Form.Item
              name="dateReceived"
              label="Date Received"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                disabledDate={disabledFutureDate}
                onChange={handleDateChange} 
              />
            </Form.Item>
            <Form.Item
              name="staffInitial"
              label="Staff Initial"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="packageType"
              label="Package Type"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="sender"
              label="Sender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="comments"
              label="Comments"
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

export default AddMail;
