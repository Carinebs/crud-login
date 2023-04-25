import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Box, createTheme, ThemeProvider, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import Table from "../components/Table";

const Main = styled.main`
  background-color: #f7f7f7;
`;

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const User = () => {
  return (
    <Main>
      <NavBar />
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column "
        minHeight="90vh"
      >
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              width: {
                mobile: 346,
                tablet: 690,
                laptop: 770,
                desktop: 770,
              },
            }}
          >
            <Table />
          </Box>
        </ThemeProvider>
      </Grid>
    </Main>
  );
};

export default User;
