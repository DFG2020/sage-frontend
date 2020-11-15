import React from "react";
import moment from 'moment';
import { Form, Input, Row, Col, Select, DatePicker } from "antd";

const { Option } = Select;

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

function handleStatusChange(value) {
  console.log(`selected ${value}`);
}

function handlePickupDateChange(date, dateString) {
  console.log(date, dateString);
}

function handleReceivedDateChange(date, dateString) {
  console.log(date, dateString);
}

function disabledFutureDate(current) {
  // Can not select days before today and today
  return current > moment().endOf('day');
}

const UpdateMail = () => {
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
            name="updateMailForm"
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
              name="receivedDate"
              label="Received Date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                disabledDate={disabledFutureDate}
                onChange={handleReceivedDateChange} 
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
            <Form.Item
              name="pickupDate"
              label="Pick-up Date"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <DatePicker
                disabledDate={disabledFutureDate}
                onChange={handlePickupDateChange} 
              />
            </Form.Item>
            {/* react-canvas-wrapper imported to package.json
                Need to use it to capture mouse signature */}
            <Form.Item
              name="signature"
              label="Signature"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="status"
              label="Status"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleStatusChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateMail;
