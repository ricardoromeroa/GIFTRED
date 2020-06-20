import React from "react";
import { createBrowserHistory } from "history";
import { Route, Switch, Router, Redirect } from "react-router-dom";

import Mainpage from "./views/Mainpage";
import Signup from "./views/Signup";
import Directorio from "./views/Directorio";
import AdminEmpresarial from "./admin/layouts/Admin";
// import SigninContainer from './containers/SigninContainer/SigninContainer';
// import GiftcardContainer from './containers/GiftcardContainer/GiftcardContainer';
// import SobreContainer from './containers/SobreContainer/SobreContainer';
// import Faqscontainer from './containers/faqscontainer/Faqscontainer';
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const hist = createBrowserHistory();

function App() {
  const admin = true;
  if (admin === true) {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={AdminEmpresarial} />
          <Redirect from="/" to="/admin/panel-empresarial" />
        </Switch>
        ;
      </Router>
    );
  } else {
    return (
      <Router history={hist}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/directorio" component={Directorio} />
          <Route
            exact
            path="/admin/panel-empresarial"
            component={AdminEmpresarial}
          />
          {/* <Route exact path="/signin" component={SigninContainer} /> */}
          {/* <Route exact path="/giftcard" component={GiftcardContainer} /> */}
          {/* <Route exact path="/quienes_somos" component={SobreContainer} />       */}
          {/* <Route exact path="/faqs" component={Faqscontainer} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
  
}

export default App;
