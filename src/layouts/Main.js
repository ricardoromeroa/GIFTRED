import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// import Form from './components/Signup/Form'
import Navbar from '../components/Navbar/Navbar';
import AuthContextProvider from '../contexts/AuthContext';

// import Faqscontainer from './containers/faqscontainer/Faqscontainer';
import Footer from '../components/Footer/Footer';

// Dashboard Users
import { isCaseOrDefaultClause } from 'typescript';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/material-dashboard-react/layouts/adminStyle.js';

import routes from "../routes.js";

const useStyles = makeStyles(styles);

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/main") {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/" to="/home" />
  </Switch>
);

export default function Main({ ...rest }) {
  // styles
  const classes = useStyles();

  return (
    <div className={classes.container, classes.wrapper}>
      <AuthContextProvider>
        <Navbar
          routes={routes}
          {...rest}
        />
          <div className={classes.content}>
            <div>{switchRoutes}</div>
          </div>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
