// import React, {useContext} from "react"
// import {ClientContext} from "../../context"
import React from "react"
import { Row, Col, Card, Avatar } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./styling/client-list.css"

const { Meta } = Card;
// const clientData = {
//    userId: "1",
//    firstName: "foo",
//    lastName: "bar",
//    middleName: "goo",
//    forwardAddressLine: "test road",
//    authorizedPickupFirstName: "off",
//    authorizedPickupLastName: "rab",
//    profile_image_id: "testimgID",
//    totalMail: 10,
//    pendingMail: 1
// };

const ClientList = () => {
   // const[clientObject, setclientObject] = useContext(ClientContext)
   // setclientObject(clientData);
   // console.log(clientObject);

   return(
     <>
       <Row gutter={[0, 48]}>
         <Col span={24}>Search term</Col>
       </Row>
       <Row gutter={[32, 32]} justify="center" id="card-align-center">
         <Col span={4}>
           <Card
             style={{ width: 300 }}
             cover={(
               <img
                 alt="example"
                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
               />
            )}
             actions={[
               <SettingOutlined key="setting" />,
               <EditOutlined key="edit" />,
               <EllipsisOutlined key="ellipsis" />,
               ]}
           >
             <Meta
               // eslint-disable-next-line max-len
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
               title="Card title"
               description="This is the description"
             />
           </Card>
         </Col>
         <Col span={4}>
           <Card
             style={{ width: 300 }}
             cover={(
               <img
                 alt="example"
                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
               />
            )}
             actions={[
               <SettingOutlined key="setting" />,
               <EditOutlined key="edit" />,
               <EllipsisOutlined key="ellipsis" />,
               ]}
           >
             <Meta
               // eslint-disable-next-line max-len
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
               title="Card title"
               description="This is the description"
             />
           </Card>
         </Col>
         <Col span={4}>
           <Card
             style={{ width: 300 }}
             cover={(
               <img
                 alt="example"
                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
               />
            )}
             actions={[
               <SettingOutlined key="setting" />,
               <EditOutlined key="edit" />,
               <EllipsisOutlined key="ellipsis" />,
               ]}
           >
             <Meta
               // eslint-disable-next-line max-len
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
               title="Card title"
               description="This is the description"
             />
           </Card>
         </Col>
         <Col span={4}>
           <Card
             style={{ width: 300 }}
             cover={(
               <img
                 alt="example"
                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
               />
            )}
             actions={[
               <SettingOutlined key="setting" />,
               <EditOutlined key="edit" />,
               <EllipsisOutlined key="ellipsis" />,
               ]}
           >
             <Meta
               // eslint-disable-next-line max-len
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
               title="Card title"
               description="This is the description"
             />
           </Card>
         </Col>
         <Col span={4}>
           <Card
             style={{ width: 300 }}
             cover={(
               <img
                 alt="example"
                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
               />
            )}
             actions={[
               <SettingOutlined key="setting" />,
               <EditOutlined key="edit" />,
               <EllipsisOutlined key="ellipsis" />,
               ]}
           >
             <Meta
               // eslint-disable-next-line max-len
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
               title="Card title"
               description="This is the description"
             />
           </Card>
         </Col>
       </Row>
     </>
   )
}

export default ClientList