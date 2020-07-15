import React, {Component} from 'react';
import AppHeader from './components/AppHeader';
import './App.sass';
import Home from './components/Home';
import Contacts from './components/info/Contacts';
import About from './components/info/About';
import Success from './components/info/Success';
import Fail from './components/info/Fail';
import Feedback from './components/info/Feedback';
import TermsOfUse from './components/info/TermsOfUse';
import Conf from './components/info/Conf';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component  {
 
      render () {
         return (
          <Router>
              <AppHeader/>
                <Route exact path="/" component={Home}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/about" component={About}/>
                <Route path="/terms" component={TermsOfUse}/>
                <Route path="/conf" component={Conf}/>
                <Route path="/success" component={Success}/>
                <Route path="/fail" component={Fail}/>
                <Route path="/feedback" component={Feedback}/>
             
          </Router>
        );
      }
  
}

export default App;
