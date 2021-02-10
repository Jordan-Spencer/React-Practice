import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home';
import TaskDetails from './Components/TaskDetails';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Root = () => (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={TaskDetails} />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
