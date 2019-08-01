import React from 'react';
import './App.css';
import routes from "./component/routes"
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
