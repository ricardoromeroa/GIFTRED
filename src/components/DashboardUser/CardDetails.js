import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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

  // Temporalmente datos desde SWAPI
    return (
        <React.Fragment>         
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
        </React.Fragment>
    )
};

export default UserDetails;