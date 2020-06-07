import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import SigninContainer from './containers/SigninContainer/SigninContainer';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/signin" component={SigninContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
