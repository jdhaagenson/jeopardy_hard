import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import Navigation from './Navigation'
import Welcome from './components/Welcome';
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/Navigation";


function App ()  {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Jordan"/>}/>
          <Route path="/clock" component={Clock}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Navigation/>
      </div>
    )
  }


export default App;