import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/Navigation";
import NotFound from './NotFound';
import Jeopardy from './components/jeopardy/Jeo';
import './App.css';
import AnswerForm from './components/jeopardy/AnswerForm';


function App ()  {
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Jordan"/>}/>
          <Route path="/clock" component={Clock}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/jeopardy" component={Jeopardy}/>
          <Route path="*" component={NotFound}/>
        </Switch>

      </div>
    )
  }


export default App;