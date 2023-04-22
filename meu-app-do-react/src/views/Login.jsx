import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
 

const Main= styled.main`
   background-color: #F7F7F7;
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

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const userRef = React.useRef();
    const errRef  = React.useRef();

    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [errMsg, serErrMsg] = React.useState(false);
    const [isRegistered, setIsRegistered] = React.useState(false);
    const [logged, setLogged] = React.useState(false);

    // React.useEffect(() => {
    //   userRef.current.focus();
    // }, []);

    React.useEffect(() => {
        serErrMsg('');
    }, [user, pass]);
    
     const notRegisteredAlert =
      (<Alert severity="error"
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
            marginTop: {
                mobile: 2,
                tablet: 2,
                laptop: 2,
                desktop:2
            }}}>Usuário não cadastrado</Alert>);
    

  return (
    <Main>
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
                    }}>Login</Typography>
                    <TextField
                        required
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
                    }}>ENTRAR</Button>
                    <NavLink to='/register'> 
                        <Link >Ainda não é cadastrado? Cadastre-se</Link> 
                    </NavLink>
                    <section ref={errRef}  aria-live="assertive">
                        {errMsg}
                    </section>
                </Box>
            </ThemeProvider>
        </Grid>
    </Main>
  );
};

export default Login;
