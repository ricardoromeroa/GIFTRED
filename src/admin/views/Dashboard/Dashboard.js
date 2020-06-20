import React from "react";

// react plugin for creating charts
// import ChartistGraph from "react-chartist";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ButtonUi from "@material-ui/core/Button";

// @material-ui/icons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardAvatar from "components/Card/CardAvatar.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
// import createSpacing from "@material-ui/core/styles/createSpacing";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// Img from Cloudinary import
// import avatar from "assets/img/faces/marc.jpg";
import { Image, CloudinaryContext } from "cloudinary-react";

//DB connect
const companiesData = {
  companyName: "Restaurante Ramos",
  companyDescription:
    "Gran variedad de deliciosos platillos y menus para todo evento",
  companyDirection: "Avenida Buenos Aires Casa 23",
  companyCountry: "Mexico",
  companyState: "Chiapas",
  companyTown: "Amatán",
  companyCity: "Amatán",
  companyLocal: "San Antonio Tres Picos",
  companyZipCode: 29700,
};

// Styles
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

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader color="info">
          <CardAvatar profile>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              {/* <img src={avatar} alt="..." /> */}
              <CloudinaryContext cloudName="demo">
                <Image
                  publicId="beach_huts.jpg"
                  gravity="center"
                  crop="thumb"
                  width="150"
                  height="150"
                ></Image>
              </CloudinaryContext>
            </a>
          </CardAvatar>
          <h4 className={classes.cardTitleWhite}>Negocios/Empresas</h4>
          <p className={classes.cardCategoryWhite}>Lista de Negocios</p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
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
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Pais"
                id="Town"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: companiesData.companyTown,
                  disabled: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Estado"
                id="state"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: companiesData.companyState,
                  disabled: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Ciudad"
                id="city"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: companiesData.companyCity,
                  disabled: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Localidad"
                id="Local"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: companiesData.companyLocal,
                  disabled: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Codigo Postal"
                id="postal-code"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: companiesData.companyZipCode,
                  disabled: true,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <InputLabel style={{ color: "#AAAAAA" }}>Descripción</InputLabel>
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
        {/* <GridItem xs={6} sm={6} md={6}>
              <Button color="warning">Editar</Button>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <Button color="danger">Eliminar</Button>
            </GridItem> */}
        <div className={classes.buttonGroup}>
          <ButtonGroup variant="text" arial-label="text button group">
            <ButtonUi
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
            >
              Editar
            </ButtonUi>
            <ButtonUi
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Eliminar
            </ButtonUi>
          </ButtonGroup>
        </div>
      </Card>
      <div>
        <ButtonUi variant="contained" color="primary">
          Añadir Negocio
        </ButtonUi>
      </div>
      {/* <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
    </div>
  );
}
