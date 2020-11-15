import React, { useState } from "react";
import Nav from "./components/NavigationBar/Nav";
import "./App.css";
import { ClientContext, ClientIdContext } from "./context";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const initClientObject = [];
const initClientId = 0;

export default function App() {
  const clientObj = useState(initClientObject);
  const clientIdVal = useState(initClientId);
  return (
    <ClientContext.Provider value={clientObj}>
      <ClientIdContext.Provider value={clientIdVal}>
        <Nav />
      </ClientIdContext.Provider>
    </ClientContext.Provider>
  );
}

// You can think of these components as "pages"
// in your app.
