import * as React from "react";
import { Box, 
        Toolbar, 
        Button,
        AppBar,
        Typography
} from "@mui/material";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              <Button color="inherit">SAIR</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}
