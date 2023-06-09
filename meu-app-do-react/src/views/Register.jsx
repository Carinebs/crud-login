import * as React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { FormControl, 
        Box, 
        createTheme, 
        ThemeProvider, 
        Grid, 
        TextField, 
        OutlinedInput, 
        IconButton, 
        InputLabel, 
        InputAdornment,
        Button,
        Link,
        Typography,
        Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ModalConfirmation from "../components/ModalConfirmation";


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
const baseURL = "http://localhost:3333/users/";
const Register = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [isRegistered, setIsRegistered] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [openModal, setOpenModal] = React.useState(false);

  const {
    register,
    handleSubmit
  } = useForm();

  const createUser = (data) => {
    axios
      .post(`${baseURL}/registration`, data)
      .then((response) => {
        if (response.status === 200) {
            setOpenModal(!openModal)
            return true; 
          } else {
            return false;
          }
      }).catch(error => {
        console.log(error.message); 
      });
  };

  const onSubmit = (data) => {
    createUser(data);
    
}
    return (
        <form onSubmit={handleSubmit(onSubmit)}  style={{backgroundColor : '#F7F7F7'}}>
            <ModalConfirmation isOpen={openModal} onClose={() =>setOpenModal(false) }/>
            <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column "
                minHeight="100vh"
            >
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection: "column",
                            backgroundColor: '#FFFFFF',
                            width: {
                            mobile: 346,
                            tablet: 690,
                            laptop: 770,
                            desktop:770
                            },
                            height: {
                                mobile: 364,
                                tablet: 445,
                                laptop: 462,
                                desktop:462
                            }
                        }}
                    >
                        <Link sx={{ alignSelf: 'start', ml: { mobile: 3, tablet: 5, laptop: 5, desktop:5 }}}> 
                            <NavLink to={'/'}>
                                <ArrowBackIcon  color="primary" />
                            </NavLink>
                        </Link>
                        <Typography 
                            sx={{
                                alignSelf: 'start',
                                ml: {
                                    mobile: 3,
                                    tablet: 5,
                                    laptop: 5,
                                    desktop:5
                                },
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize:  {
                                    mobile: 20,
                                    tablet: 32,
                                    laptop: 32,
                                    desktop:32
                                },
                                marginBottom: {
                                mobile: 2,
                                tablet: 2,
                                laptop: 2,
                                desktop:2
                            }
                        }}>Cadastre-se</Typography>
                        <TextField
                            {...register("name", {
                                required: true
                              })}
                            required
                            id="outlined-required"
                            label="Nome"
                            sx={{
                                width: {
                                mobile: 298,
                                tablet: 594,
                                laptop: 690,
                                desktop:690
                                },
                                height: {
                                    mobile: 56,
                                    tablet: 56,
                                    laptop: 56,
                                    desktop:56
                                },
                                marginBottom: {
                                    mobile: 2,
                                    tablet: 2,
                                    laptop: 3,
                                    desktop:3
                                }
                            }}
                        />
                        <TextField
                            required
                            {...register('email')}
                            id="outlined-required"
                            label="E-mail"
                            sx={{
                                width: {
                                mobile: 298,
                                tablet: 594,
                                laptop: 690,
                                desktop:690
                                },
                                height: {
                                    mobile: 56,
                                    tablet: 56,
                                    laptop: 56,
                                    desktop:56
                                },
                                marginBottom: {
                                    mobile: 2,
                                    tablet: 2,
                                    laptop: 3,
                                    desktop:3
                                }
                            }}
                        />
                        <FormControl sx={{ 
                            marginBottom: {
                                mobile: 4,
                                tablet: 4,
                                laptop: 6,
                                desktop:6
                            }
                         }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                 required
                                 {...register('password')}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                sx={{
                                    width: {
                                    mobile: 298,
                                    tablet: 594,
                                    laptop: 690,
                                    desktop:690
                                    },
                                    height: {
                                        mobile: 56,
                                        tablet: 56,
                                        laptop: 56,
                                        desktop:56
                                    }
                                }}
                            />
                        </FormControl>
                        <Button variant="contained"
                        type='submit'
                        sx={{
                            width: {
                            mobile: 298,
                            tablet: 594,
                            laptop: 690,
                            desktop: 690
                            },
                            height: {
                                mobile: 42,
                                tablet: 42,
                                laptop: 42,
                                desktop: 42
                            },
                            marginBottom: {
                                mobile: 2,
                                tablet: 2,
                                laptop: 2,
                                desktop:2
                            }
                        }}
                        // onClick={() => { setOpenModal(!openModal)}}
                        >ENVIAR</Button>

                    </Box>
                </ThemeProvider>
            </Grid>
        </form>
      );
}

export default Register; 
