import React, {Component} from 'react';
import AppHeader from './components/AppHeader';
import './App.sass';
import Home from './components/Home';
import Contacts from './components/info/Contacts';
import About from './components/info/About';
import TermsOfUse from './components/info/TermsOfUse';
import Conf from './components/info/Conf';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends Component  {
 
      render () {
         return (
          <Router>
              <AppHeader/>
              <Route path="/home" component={Home}/>
              <Route path="/contacts" component={Contacts}/>
              <Route path="/about" component={About}/>
              <Route path="/terms" component={TermsOfUse}/>
              <Route path="/conf" component={Conf}/>
              <Redirect from="/" to="/home"/>
          </Router>
        );
      }
  
}








export default App;
