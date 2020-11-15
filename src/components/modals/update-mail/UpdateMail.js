import React from "react";
import moment from 'moment';
import axios from "axios";
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

function disabledFutureDates(current) {
  return current > moment().endOf('day');
}

const UpdateMail = () => {
  const onFinish = (values) => {
    const mailId = '1234'
    axios.put(`http://localhost:8000/api/mail/${mailId}`, {
      userId: '1234',
      receivedDateTimeMs: Number(values.receivedDate.format("x")),
      staffInitial: `${values.staffInitial}`,
      mailType: `${values.packageType}`,
      fulfillmentProvider: `${values.sender}`,
      comment: `${values.comments}`,
      pickedUpDateTimeMs: Number(values.pickupDate.format("x")),
      mailStatus: `${values.status}`,
      signatureImageId: ""
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      alert(`Network error while updating a mail. Contact IT! msg: ${err}`);
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
                disabledDate={disabledFutureDates} 
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
            <Form.Item
              name="pickupDate"
              label="Pick-up Date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                disabledDate={disabledFutureDates}
              />
            </Form.Item>
            {/* react-canvas-wrapper imported to package.json
                Need to use it to capture mouse signature */}
            <Form.Item
              name="status"
              label="Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Option value="MAIL_FORWARDED">Mail Forwarded</Option>
                <Option value="PENDING_PICKUP">Pending Pickup</Option>
                <Option value="PICKED_UP_CLIENT_USER">Picked up - Client</Option>
                <Option value="PICKED_UP_AUTH_USER">Picked up - Authorized User</Option>
                <Option value="RETURNED_TO_SEND">Returned to Sender</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateMail;
