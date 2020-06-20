import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ButtonUi from "@material-ui/core/Button";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// @material-ui/icons components
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VpnKey from "@material-ui/icons/VpnKey";

// Img from Cloudinary import
// import avatar from "assets/img/faces/marc.jpg";
import { Image, CloudinaryContext } from "cloudinary-react";

// Material Ui Styles
const useStyles = makeStyles((theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

//Users-data
const usersData = {
  userCompany: "Restaurante Ramos",
  userFirstName: "Julio",
  userLastName: "Ramos",
  userMail: "jramos@gmail.com",
};
const companiesData = {
  companyName: "Restaurante Ramos",
  companyDescription:
    "Gran variedad de deliciosos platillos y menus para todo evento",
  companyDirection: "Avenida Buenos Aires Casa 23",
  companyCountry: "Mexico",
  companyState: "Chiapas",
  companyTown: "Amatán",
};

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                {/* <img src={avatar} alt="..." /> */}
                <CloudinaryContext cloudName="demo">
                  <Image
                    publicId="actor.jpg"
                    gravity="center"
                    crop="thumb"
                    width="150"
                    height="150"
                  ></Image>
                </CloudinaryContext>
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>
                {usersData.userFirstName + " " + usersData.userLastName}
              </h4>
              <p className={classes.description}>Descripcion</p>
              <ButtonUi
                variant="contained"
                color="primary"
                startIcon={<VpnKey />}
              >
                Cambiar Password
              </ButtonUi>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Perfil</h4>
              <p className={classes.cardCategoryWhite}>
                Empresario/Comerciante
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                {/* <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Empresa"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: usersData.userCompany,
                      disabled: true,
                    }}
                  />
                </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Usuario"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps= {{
                      value: usersData.userName,
                      disabled: true,
                    }}
                  />
                </GridItem> */}
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: usersData.userMail,
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Nombres"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: usersData.userFirstName,
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Apellidos"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: usersData.userLastName,
                      disabled: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <div className={classes.buttonGroup}>
              <ButtonGroup variant="text" arial-label="text button group">
                <ButtonUi
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                >
                  Editar
                </ButtonUi>
              </ButtonGroup>
            </div>
          </Card>
          {/* <Card>
            <CardHeader color="info">
              <p className={classes.cardCategoryWhite}>Negocios</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Empresa"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: companiesData.companyName,
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>
                    Descripción
                  </InputLabel>
                  <CustomInput
                    labelText="Sobre el Negocio"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: companiesData.companyDescription,
                      multiline: true,
                      rows: 5,
                      disabled: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                  <Button color="warning">Editar</Button>
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                  <Button color="danger">Eliminar</Button>
                </GridItem>
              </GridContainer>
            </CardFooter>
            <Button color="success">Añadir Negocio</Button>
          </Card> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
