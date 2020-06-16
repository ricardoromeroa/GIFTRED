import React from 'react';
import SignupFormStyles from './Form.css';
import MaskedInput from 'react-input-mask';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    AppBar,
    Paper,
    Grid,
    TextField,
    Toolbar,
    Typography,
    MenuItem
} from '@material-ui/core';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles=makeStyles({
    form:{
        margin:'0 auto',
        width:"75%",
        marginBottom:"20px"
    },
    formMovil:{
        margin:'0 auto',
        width:"98%",
        marginBottom:"20px"
    },
    buttons:{
        marginLeft:"20%",
        marginRight:"20%",
        width:"60%"
    },
    buttonsMovil:{
        marginLeft:"5%",
        marginRight:"5%",
        width:"90%"
    },
    appbar:{
        borderRadius:"5px",
        background:"linear-gradient(to bottom, #ff3c00, #dc2430)"
    },
    gridWrap:{
        marginTop:"10px"
    }
})

const SignupForm=()=>{

    const classes=useStyles();
    const match=useMediaQuery('(min-width:600px)');

    const submitNegocio=(e)=>{
        e.preventDefault();
        let valuesFormulario={
            nombreNegocio:document.getElementById("nombreNegocioInput").value,
            giro:document.getElementById("giroNegocioInput").value,
            telefonoNegocio:document.getElementById("giroNegocioInput").value,
            plazoVencimiento:document.getElementById("plazoVencimientoInput").value,
            calleNegocio:document.getElementById("calleInput").value,
            ciudadNegocio:document.getElementById("ciudadInput").value,
            estadoNegocio:document.getElementById("estadoInput").value,
            cpNegocio:document.getElementById("cpInput").value,
            paisNegocio:document.getElementById("paisSelect").value,
            nombreResponsable:document.getElementById("nombreInput").value,
            correoResponsable:document.getElementById("correoResponsableInput").value,
            telefonoNegocio:document.getElementById("telefonoResponsableInput").value,
            password:document.getElementById("passwordInput").value,
            correoNegocio:document.getElementById("correoNegocioInput").value
        }
        console.log(valuesFormulario);
    }

    let age=0;

    return (
        <React.Fragment>
            <Paper elevation={3} className={match? classes.form:classes.formMovil}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar variant="dense">
                        <Typography variant="h5" color="inherit" >Registro</Typography>
                    </Toolbar>
                </AppBar>
                <Typography variant="h6" color="inherit">Informacion Negocio</Typography>
                <Grid container spacing={2} className={classes.gridWrap}>
                    <Grid item xs={12} sm={6}>
                            <TextField id="nombreNegocio" label="Nombre" variant="outlined" className={match?classes.buttons:classes.buttonsMovil}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="giroNegocio" select label="Giro" variant="outlined" className={match?classes.buttons:classes.buttonsMovil}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="telefonoNegocio" label="Telefono" variant="outlined" className={match?classes.buttons:classes.buttonsMovil}/>
                        </Grid>
                </Grid>
                <Typography variant="h6" color="inherit">Configuracion para Giftcards</Typography>
                <Grid container spacing={2} className={classes.gridWrap}>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }} className={match?classes.buttons:classes.buttonsMovil}/>
                        </MuiPickersUtilsProvider>
                    
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
        
    )
}
export default SignupForm;