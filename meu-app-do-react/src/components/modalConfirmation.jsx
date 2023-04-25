import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  Grid,
  Typography,
  Dialog,
  DialogContentText,
  DialogContent
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from '@mui/icons-material/Close';

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

export default function ModalConfirmation({ isOpen, onClose }) {
  return (
    isOpen && (
      <ThemeProvider theme={theme}>
        <Dialog open={true}>
          <NavLink to={"/"}><CloseIcon sx={{color: '#2196F3',fontSize: 22, marginTop: 1, marginLeft: 1 }}/></NavLink>
          <DialogContent>
            <DialogContentText>
              <Grid sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"row",
                gap:1,
                marginBottom: 1
              }}>
                <CheckCircleOutlineIcon sx={{color:'#2E7D32',fontSize:25 }} />
                <Typography sx={{color:'#000000',fontSize: 19}}> Usuário cadrastado com sucesso!</Typography>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    )
  );
}
