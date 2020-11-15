/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { Row, Col } from 'antd';
import { ClientContext } from '../../context';
import CardItem from './card-item';
import './styling/client-list.css';

const clientData1 = {
  userId: '1',
  firstName: 'foo',
  lastName: 'bar',
  middleName: 'goo',
  forwardAddressLine: 'test road',
  authorizedPickupFirstName: 'John',
  authorizedPickupLastName: 'Doe',
  profile_image_id: 'testimgID',
  totalMail: 10,
  pendingMail: 1,
};
const clientData2 = {
  userId: '2',
  firstName: 'bar',
  lastName: 'foo',
  middleName: 'doo',
  forwardAddressLine: 'test2 road',
  authorizedPickupFirstName: 'Adam',
  authorizedPickupLastName: 'Ben',
  profile_image_id: 'testimgID',
  totalMail: 0,
  pendingMail: 0,
};

const data = [];
data.push(clientData1, clientData2);

const ClientList = () => {
  // eslint-disable-next-line no-unused-vars
  const [clientObjectArray, setClientObjectArray] = useContext(ClientContext);
  // TODO: after mail click, send user to /mail route
  const clientCards = [];
  for (let i = 0; i < clientObjectArray.length; i += 1) {
    clientCards.push(
      <CardItem
        firstName={clientObjectArray[i].user.firstName}
        lastName={clientObjectArray[i].user.lastName}
        auFirstName={clientObjectArray[i].user.authorizedPickupFirstName}
        auLastName={clientObjectArray[i].user.authorizedPickupLastName}
        newMail={clientObjectArray[i].totalNewMailCount}
        totalMail={clientObjectArray[i].totalMailCount}
      />,
    );
  }
  return (
    <>
      <Row gutter={[32, 32]} justify="center" id="card-align-center">
        {clientCards}
      </Row>
    </>
  );
};

export default ClientList;
