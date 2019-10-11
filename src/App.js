import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import './themes-dist-5.1-gcweb/css/theme.css';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer'

function App() {
  return (
    <div id='app'>
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/about">
            <MainContainer title='What is this?'>
              This website was created as a coding challenge for KBD_Group. Thank you for looking at it.
            </MainContainer>
          </Route>
          <Route path="/hello">
            <MainContainer title='Hello KBG Group'>
              Hello  guys! Thanks for meeting with me the other day and showing me around the office.
            </MainContainer>
          </Route>
          <Route path="/more-content">
            <MainContainer title='Static Content'>
              THIS CONTENT IS STATIC
            </MainContainer>
          </Route>
          <Route path="/">
            <MainContainer title='Home Page'> This is the home page.</MainContainer>
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
