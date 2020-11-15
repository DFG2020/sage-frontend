import React from "react";

const clientObjectArray = [];

const ClientContext = React.createContext([clientObjectArray, () => {}]);
export default ClientContext;
