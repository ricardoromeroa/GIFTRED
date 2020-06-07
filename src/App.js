import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import SigninContainer from './containers/SigninContainer/SigninContainer';
import GiftcardContainer from './containers/GiftcardContainer/GiftcardContainer';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/signin" component={SigninContainer} />
        <Route exact path="/giftcard" component={GiftcardContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
