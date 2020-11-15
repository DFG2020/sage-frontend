import React from "react";

const clientId = 0;

const ClientIdContext = React.createContext([clientId, () => {}]);

export default ClientIdContext;
