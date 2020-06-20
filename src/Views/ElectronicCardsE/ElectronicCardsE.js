import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ButtonUi from "@material-ui/core/Button";

// @material-ui/icons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

// core components
import Quote from "../../components/Typography/Quote.js";
import Muted from "../../components/Typography/Muted.js";
import Primary from "../../components/Typography/Primary.js";
import Info from "../../components/Typography/Info.js";
import Success from "../../components/Typography/Success.js";
import Warning from "../../components/Typography/Warning.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

// Img from Cloudinary import
// import avatar from "assets/img/faces/marc.jpg";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

//DB connect
const giftCards = {};

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

export default function ElectronicCards() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader>
            <CardAvatar>
              <CloudinaryContext cloudName="demo">
                <Box width="100%">
                  <Image
                    publicId="beach.jpg"
                    useRootPath="true"
                    clientHits="true"
                    width="100%"
                  >
                    <Transformation
                      effect="outline:10:200"
                      color="red"
                      radius="10"
                      dpr="auto"
                      crop="scale"
                    ></Transformation>
                  </Image>
                </Box>
              </CloudinaryContext>
            </CardAvatar>
          </CardHeader>
          <CardBody></CardBody>
          <div className={classes.buttonGroup} width="100%">
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
      </GridItem>
    </GridContainer>
  );
}
