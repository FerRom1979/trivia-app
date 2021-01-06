import React from 'react';
import Homepage from './components/homepage';
import StartApp from './components/startApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/index';

function App() {
  return (
    <div className="App" style={{ height: '100%', margin: 0, padding: 0 }}>
      <Router>
        <Switch>
          <Route exact path="/" component={StartApp} />
          <Route exat path="/homepage" component={Homepage} />
          <Route exat path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
