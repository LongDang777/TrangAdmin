import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
import { LayoutTempalte } from './Templates/LayoutTempalte';



export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <LayoutTempalte path='/' component={Dashboard} />
      <LayoutTempalte path='/customers' component={Customer} />
    </Router>
  );
}

export default App;
