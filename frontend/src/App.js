import React from 'react';
import {Route, Switch} from 'react-router-dom';
import IndexFormPage from './components/LoginFormPage'
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation';
import QuestionsIndexPage from './components/QuestionsIndexPage'
import SplashPage from './components/SplashPage';
function App() {
  return (
    <>
    <Navigation />
      <Switch>
          <Route path="/">
            <SplashPage />
          </Route>
          <Route path="/login">
            <IndexFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/questions">
            <QuestionsIndexPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
