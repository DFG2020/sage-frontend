import React, {useContext} from "react"
import {ClientContext} from "../../context"

const clientData = {
   userId: "1",
   firstName: "foo",
   lastName: "bar",
   middleName: "goo",
   forwardAddressLine: "test road",
   authorizedPickupFirstName: "off",
   authorizedPickupLastName: "rab",
   profile_image_id: "testimgID",
   totalMail: 10,
   pendingMail: 1
};

const ClientList = () => {
   const[clientObject, setclientObject] = useContext(ClientContext)
   setclientObject(clientData);
   console.log(clientObject);

   return(
     <div>
       <p>hello world</p>
     </div>
   )
}

export default ClientList