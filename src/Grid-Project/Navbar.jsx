import { ShoppingCartCheckout } from '@mui/icons-material'
import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import DrawerComponent from './DrawerComponent';

const Navbar = ({linksArray}) => {
    const [value,setValue]=useState(0);
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar 
        sx={{backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(141,73,182,1) 35%, rgba(0,212,255,1) 100%)"}}
    >
        <Toolbar>
            { isMatch 
             ? 
                <>
                    <Typography>
                       <ShoppingCartCheckout/>
                    </Typography>
                    <DrawerComponent links={linksArray}/>
                </>
                :
                (<Grid container sx={{placeItems:"center"}}>
                    <Grid item xs={2}>
                        <Typography>
                            <ShoppingCartCheckout/>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Tabs 
                            value={value} 
                            indicatorColor='secondary' 
                            textColor='inherit' 
                            onChange={(e,val)=> setValue(val)}
                        >
                        {linksArray.map((link,index)=>{
                            return <Tab key={index} label={link}/>
                        })}
                        </Tabs>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}> 
                        <Box display={"flex"}>
                            <Button 
                                sx={{marginLeft:"auto",background:' rgb(2,0,36)'}}
                                variant='contained'
                                size='small'
                            >Login</Button>
                            <Button 
                                variant='contained'
                                sx={{marginLeft:1,background:' rgb(2,0,36)'}} 
                                size='small'
                            >Sign Up</Button>
                        
                        </Box>
                    </Grid>
                </Grid>)
            }
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
