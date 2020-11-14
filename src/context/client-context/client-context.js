import React from "react";

const clientObject = {
   userId: "",
   firstName: "",
   lastName: "",
   middleName: "",
   forwardAddressLine: "",
   authorizedPickupFirstName: "",
   authorizedPickupLastName: "",
   profile_image_id: "",
   totalMail: 0,
   pendingMail: 0
};

const ClientContext = React.createContext([clientObject, () => {}]);
export default ClientContext;