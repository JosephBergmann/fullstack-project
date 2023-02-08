import React from 'react';
import {Route, Switch} from 'react-router-dom';
import IndexFormPage from './components/LoginFormPage'

function App() {
  return (
    <Switch>
        <Route path="/">
          <IndexFormPage />
        </Route>
    </Switch>
  );
}

export default App;
