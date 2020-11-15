import React from "react"
import { Card, Col } from 'antd';
import { EditOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

const CardItem = ({firstName, lastName, auFirstName, auLastName}) => {
   const mailDetails = `Pending Mail: 10 | Total mail: 100`

   return (
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
           <InfoCircleOutlined />,
           <EditOutlined key="edit" />
               ]}
       >
         <Meta
           title={`${firstName} ${lastName}`}
           description={`Authorized person: ${auFirstName} ${auLastName}`}
         />
         <div>
           <strong>{mailDetails}</strong>
         </div>
       </Card>
     </Col>
   )
}

export default CardItem