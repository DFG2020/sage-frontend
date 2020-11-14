import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import {Avatar} from '../..'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
};

const NewClient = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div style={{background: "grey"}}>
      <Row style={{background: "white", margin: "1rem 4rem", padding: "1rem 0rem"}}>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Add New User</Col>
      </Row>
      <Row style={{background: "white", margin: "1rem 4rem", padding: "1rem 0rem"}}>
        <Col style={{padding: "0rem 1rem"}} span={12}>
          <Form 
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name='clientFirstName'
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
              name='clientLastName'
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
              name='clientMiddleName'
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
              name='forwardingAddress'
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
              name='authFirstName'
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
              name='authLastName'
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
              name='authMiddleName'
              label="Authorized Pick-up Contact Middle Name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>         
          </Form>
        </Col>
        <Col style={{padding: "0rem 1rem"}} span={12}><Avatar /></Col>
      </Row>
    </div>
  );
};

export default NewClient;
