import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Col } from 'antd';
import { EditOutlined, MailOutlined } from '@ant-design/icons';

const { Meta } = Card;

// eslint-disable-next-line no-unused-vars
const CardItem = ({ firstName, lastName, auFirstName, auLastName, newMail, totalMail }) => {
  const history = useHistory();
  const mailDetails = `New Mail: ${newMail} | Total mail: ${totalMail}`;
  // TODO: after mail click, send user to /mail route

  return (
    <Col>
      <Card
        style={{ width: 300 }}
        cover={
          <img alt="e" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        }
        actions={[
          <MailOutlined
            // eslint-disable-next-line no-unused-vars
            onClick={(_) => {
              history.push('/mail');
            }}
          />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Meta title={`${firstName} ${lastName}`} />
        <div>
          <strong>{mailDetails}</strong>
        </div>
      </Card>
    </Col>
  );
};

export default CardItem;
