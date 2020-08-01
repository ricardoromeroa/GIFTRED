import {
  redColor,
  blueColor,
  whiteColor,
} from "../../material-dashboard-react.js";

const navBar = () => ({
  root: {
    position: 'fixed',
    bottom: '60px',
    right: '30px',
  },
  logo: {
    display: 'inline-block',
    padding: '10px 35px 10px 0',
    width: '200px',
  },
  blueBg: {
    backgroundColor: blueColor,
  },
  redBg: {
    backgroundColor: redColor,
  },
  link: {
    display: 'flex',
    color: 'white',
    "&,&:hover": {
      color: whiteColor,
    }
  },
  icon: {
    marginRight: '5px',
    width: 20,
    heigth: 20,
  },
});

export default navBar;
