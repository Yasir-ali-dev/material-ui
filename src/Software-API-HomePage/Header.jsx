import { Api } from '@mui/icons-material'
import { AppBar, Box, Button, Link, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'

const LINKS=["PRODUCTS","SOLUTIONS","PRICINGS","ENTERPRISE"];

const Header = () => {
  return (
    <AppBar sx={{bgcolor:"transparent",boxShadow:"0",}} position="static" >
        <Toolbar>
            <Box 
                display={"flex"} 
                flexDirection={"row"} 
                justifyContent={"center"} 
                alignItems={"center"}
                width={"100%"}
            >
                <Api sx={{color:'black'}}/>
                <Box>
                    <Tabs component={Link} value={0} sx={{textDecoration:"none"}}>
                        {
                            LINKS.map((link,index)=> 
                            <Tab 
                                key={index} 
                                label={link}
                                sx={{
                                    textDecoration:"none",
                                    fontWeight:"bold",
                                    ":hover":{
                                        textDecoration:"underline"
                                    }
                                }}
                            />)
                        }
                    </Tabs>
                </Box>
                <Box display="flex"  marginLeft={"auto"}>
                    <Button
                        variant='outlined'
                        sx={{mr:1}}
                    >
                        Talk To Us
                    </Button>
                    <Button
                        variant='contained'
                        sx={{ml:2}}
                    >
                        Try For Free
                    </Button>
                </Box>
            </Box>
        </Toolbar>
        <Box width={"100%"} height={"100vh"}>
            <video 
                width={"100%"}
                height={"57%"}
                loop
                muted
                autoPlay
                playsInline        
                src='/video.mp4'
            ></video>
            <Box display="flex" width={"100%"}>
                <Typography
                    margin={"auto"}
                    color={"black"}
                    textAlign={"center"}
                    variant='h4'
                >
                    Build Your Software Hassels With Free and Top Notch Quality
                </Typography>
            </Box>
            <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                margin={"auto"}
                marginTop={5}
            >
                <Button variant='outlined' sx={{mr:3}}>Sign Up With Email</Button>
                <Button variant='contained' sx={{mr:2}}>Log In With Email</Button>
            </Box>
        </Box>
        
    </AppBar> 

)
}

export default Header
