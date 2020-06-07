import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import DirectorioContainer from './containers/DirectorioContainer/DirectorioContainer';
import Negocio from './components/Negocio/Negocio';
import SigninContainer from './containers/SigninContainer/SigninContainer';
import GiftcardContainer from './containers/GiftcardContainer/GiftcardContainer';
import SobreContainer from './containers/SobreContainer/SobreContainer';
import Faqscontainer from './containers/faqscontainer/Faqscontainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/negocio-register" component={Negocio}/>
        <Route exact path="/directorio" component={DirectorioContainer} />
        <Route exact path="/signin" component={SigninContainer} />
        <Route exact path="/giftcard" component={GiftcardContainer} />
        <Route exact path="/quienes_somos" component={SobreContainer} />      
        <Route exact path="/faqs" component={Faqscontainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
