import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Boosters from './Components/Boosters';
import Guides from './Components/Guides';
import Help from './Components/Help';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import background from "./images/background-2.jpg"
import { useState } from 'react';

function App() {

  const [ currentLanguage, setCurrentLanguage ] = useState("eng")

  return (
    <Router>
      <div style={{ backgroundImage: `url(${background})`}} className="App">
        <NavBar language={currentLanguage}></NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/boosters">
            <Boosters />
          </Route>
          <Route path="/guides">
            <Guides />
          </Route>
          <Route path="/help">
            <Help language={currentLanguage} />
          </Route>
        </Switch>
        <Footer language={currentLanguage} setLanguage={setCurrentLanguage}></Footer>
      </div>
    </Router>
  );
}

export default App;
