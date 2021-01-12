import React from 'react';
import Homepage from './components/homepage';
import StartApp from './components/startApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/index';
import Welcome from './components/welcome/index';
import Header from './components/headers/index';
import CardQuestions from './components/cardQuestions/index';
import CardInfoPoints from './components/cardInfoPoints/index';

function App() {
  return (
    <div className="App" style={{ height: '100%', margin: 0, padding: 0, fontFamily: 'Fira Sans' }}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={StartApp} />
          <Route exat path="/homepage" component={Homepage} />
          <Route exat path="/login" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/cardquestions" component={CardQuestions} />
          <Route exact path="/cardinfopoints" component={CardInfoPoints} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
