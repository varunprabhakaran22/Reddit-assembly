import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
      <Switch>
        <Route exact path ="/" component={ Homepage }/>
      </Switch>
  );
}

export default App;