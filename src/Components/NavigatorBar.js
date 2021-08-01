import React from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  siteTitle: {
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  MenuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  MenuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

export default function NavigatorBar() {
  const classes = useStyles();
  return (
    <Container>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h4" className={classes.siteTitle}>
          Delivery Express
        </Typography>
        <Box className={classes.MenuBox}>
          {["Inicio", "Iniciar Sesion", "Registrarse"].map((MenuOption) => (
            <Link
              component="button"
              variant="body1"
              key={MenuOption}
              className={classes.MenuOption}
            >
              {MenuOption}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}
