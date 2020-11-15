import React from "react";
import moment from 'moment';
import axios from "axios";
import { Form, Input, Row, Col, DatePicker, Select } from "antd";

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

function handleDateChange(date, dateString) {
  console.log(date, dateString);
}

function disabledFutureDate(current) {
  // Can not select days before today and today
  return current > moment().endOf('day');
}

// Todo - Add User Id to the body. Add correct client name to the readOnly input (clientName)
const AddMail = () => {
  const defaultMailStatus = "PENDING_PICKUP";
  const onFinish = (values) => {
    axios.post('http://localhost:8000/api/mail', {
      userId: '1234',
      receivedDateTimeMs: Number(values.dateReceived.format("x")),
      staffInitial: `${values.staffInitial}`,
      type: `${values.packageType}`,
      fulfillmentProvider: `${values.sender}`,
      comment: `${values.comments}`,
      pickedUpDateTimeMs: 0,
      status: defaultMailStatus,
      signatureImageId: ""
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      alert(`Network error while adding a new mail. Contact IT! msg: ${err}`);
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
              <Select>
                <Option value="LARGE_MAIL">Large mail</Option>
                <Option value="REGULAR_SIZED_MAIL">Regular-sized mail</Option>
                <Option value="SMALL_BOX">Small box</Option>
                <Option value="PARCEL">Parcel</Option>
                <Option value="OTHER">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="sender"
              label="Sender"
              rules={[
                {
                  required: false,
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
