import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  createTheme,
  ThemeProvider,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    mobile: 190,
    tablet: 480,
    laptop: 480,
    desktop: 480,
  },
  height: {
    mobile: 80,
    tablet: 80,
    laptop: 90,
    desktop: 90,
  },
  bgcolor: "background.paper",
  p: 4,
  zIndex: 1000,
};

export default function ModalConfirmation({ isOpen, onClose }) {
  console.log("abriuuuu");
  return (
    isOpen && (
      <ThemeProvider theme={theme}>
        <Dialog 
        open={true}>
          <NavLink to={'/'}>x</NavLink>
          <DialogContent>
            <DialogContentText>
            Usuário cadrastado com sucesso!
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    )
  );
}
