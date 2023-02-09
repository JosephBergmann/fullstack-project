import React from 'react';
import {Route, Switch} from 'react-router-dom';
import IndexFormPage from './components/LoginFormPage'
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
      <Switch>
          <Route path="/login">
            <IndexFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
