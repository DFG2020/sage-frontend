import React, {useState} from "react"
import Nav from "./components/NavigationBar/Nav"
import "./App.css"
import initClientObject from "./context/client-context/init/init_client_state"
import {ClientContext} from "./context"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  const clientObj = useState(initClientObject);
  return (
    <ClientContext.Provider value={clientObj}>
      <Nav />
    </ClientContext.Provider>
  );
}

// You can think of these components as "pages"
// in your app.
