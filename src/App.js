import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar></Navbar>
          <Dashboard></Dashboard>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
