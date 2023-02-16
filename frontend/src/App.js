import React from 'react';
import {Route, Switch} from 'react-router-dom';
import IndexFormPage from './components/LoginFormPage'
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation';
import QuestionsIndexPage from './components/QuestionsIndexPage'
import SplashPage from './components/SplashPage';
import ShowQuestion from './components/ShowQuestion';
import NewQuestionForm from './components/NewQuestionForm'
function App() {
  return (
    <div className="app">
    <Navigation />
      <Switch>
          <Route path="/login">
            <IndexFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/questions">
            <QuestionsIndexPage />
          </Route>
          <Route path="/questions/ask">
            <NewQuestionForm />
          </Route>
          <Route path="/questions/:questionId">
            <ShowQuestion />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
