import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import DirectorioContainer from './containers/DirectorioContainer/DirectorioContainer';
import Negocio from './components/Negocio/Negocio';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/negocio-register" component={Negocio}></Route>
        <Route exact path="/directorio" component={DirectorioContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
