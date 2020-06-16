import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainpage from './Views/Mainpage';
import Signup from './Views/Signup';
import Directorio from './Views/Directorio';
// import SigninContainer from './containers/SigninContainer/SigninContainer';
// import GiftcardContainer from './containers/GiftcardContainer/GiftcardContainer';
// import SobreContainer from './containers/SobreContainer/SobreContainer';
// import Faqscontainer from './containers/faqscontainer/Faqscontainer';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/directorio" component={Directorio} />
        {/* <Route exact path="/signin" component={SigninContainer} /> */}
        {/* <Route exact path="/giftcard" component={GiftcardContainer} /> */}
        {/* <Route exact path="/quienes_somos" component={SobreContainer} />       */}
        {/* <Route exact path="/faqs" component={Faqscontainer} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
