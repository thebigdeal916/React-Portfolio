import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./components/NavTabs"
import Home from "./components/pages/Home"



function App() {
  return (
    <Router>
      <div>
        <NavTabs>
          <Route exact path="/" component={Home} />
        </NavTabs>
      </div>
    </Router>

  )

  }
export default App;

