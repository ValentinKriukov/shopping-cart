import React from "react";
import Main from "../main";
import Nav from "../nav";

import { BrowserRouter as Router, Route} from "react-router-dom";
import Registrathion from "../registration";

import "./app.css";

const App = () => {
  return (
    
    <div className='siteWrapper'>
        <Router>
        <div className="navigator"> 
            <Nav/>
        </div>
        <div className='content'>
        <Route path="/main" component={Main} />
        <Route path="/reg" component={Registrathion} />
        </div>
      
      </Router>
    </div>
  );
};
export default App;
