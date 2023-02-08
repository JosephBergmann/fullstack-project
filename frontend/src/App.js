import React from 'react';
import {Route, Switch} from 'react-router-dom';
import IndexFormPage from './components/LoginFormPage'
import SignupFormPage from './components/SignupFormPage'

function App() {
  return (
    <Switch>
        <Route path="/login">
          <IndexFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
    </Switch>
  );
}

export default App;
