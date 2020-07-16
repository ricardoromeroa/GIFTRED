import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainpage from './Views/Mainpage';
import Directorio from './Views/Directorio';
import SigninContainer from './components/SigninContainer/SigninContainer';
import SigninEmpresaContainer from './components/SigninEmpresaContainer/SigninEmpresaContainer';
import GiftcardContainer from './components/GiftcardContainer/GiftcardContainer';
import SobreContainer from './components/SobreContainer/SobreContainer';
import SignupContainer from './components/SignupContainer/SignupContainer';
import SignupEmpresaContainer from './components/SignupEmpresaContainer/SignupEmpresaContainer';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/AuthContext';
// import Faqscontainer from './containers/faqscontainer/Faqscontainer';
import Footer from './components/Footer/Footer';
// Dashboard Users
import DashboardUser from './Views/DashboardUserContainer';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/signupclientes" component={SignupContainer} />
            <Route exact path="/clientes" component={SigninContainer} />
            <Route exact path="/directorio" component={Directorio} />
            <Route exact path="/dashboard_user" component={DashboardUser} />
            <Route exact path="/negocios" component={SigninEmpresaContainer} />
            <Route exact path="/signupnegocios" component={SignupEmpresaContainer} />
            <Route exact path="/directorio" component={GiftcardContainer} />
            {/* <Route exact path="/formulario" component={Form} /> */}
            <Route exact path="/giftcard" component={GiftcardContainer} />
            <Route exact path="/quienes_somos" component={SobreContainer} />
            {/* <Route exact path="/faqs" component={Faqscontainer} /> */}
          </Switch>
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
