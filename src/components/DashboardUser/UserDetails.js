import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

function preventDefault(event) {
    event.preventDefault();
  }

const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    },
  });

const UserDetails = (props) =>{

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // Temporalmente datos desde SWAPI
    return (    
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Title>{props.name}</Title>
              <Typography component="p" variant="h4">
                  Gender: {props.gender}
              </Typography>
              <Typography color="textSecondary" className={classes.depositContext}>
                Mass: {props.mass} Kg
              </Typography>
              <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                  View balance
                </Link>
              </div>               
            </Paper>
        </Grid> 
    )
};

export default UserDetails;