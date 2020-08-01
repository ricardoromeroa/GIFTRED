/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  List,
  Link
} from "@material-ui/core";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/footerStyle.js";
import { Facebook, Twitter, Instagram, YouTube, WhatsApp } from '@material-ui/icons'

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/home" className={classes.block}>
                Inicio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/team" className={classes.block}>
                Colaboradores
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/portfolio" className={classes.block}>
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/contacts" className={classes.block}>
                Contactanos
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span> 
            &copy; {1900 + new Date().getYear()}{" "}
          </span>
        </p>
        <List className={classes.list, classes.social}>
          <ListItem className={classes.inlineBlock}>
              <Link href='/' className={ classes.block }><Facebook/></Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
                <Link href='/' className={ classes.block }><Twitter/></Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
                <Link href='/' className={ classes.block }><Instagram/></Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
                <Link href='/' className={ classes.block }><WhatsApp/></Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
                <Link href='/' className={ classes.block }><YouTube/></Link>
          </ListItem>
        </List>
      </div>
    </footer>
  );
}
