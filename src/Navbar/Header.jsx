import { ShoppingCartCheckout } from '@mui/icons-material'
import { AppBar, Button, Tab, Tabs, Toolbar ,useTheme,useMediaQuery, Typography} from '@mui/material'
import React, { useState } from 'react';
import DrawerComponent from './DrawerComponent';

const links=["PRODUCTS","SERVICES","ABOUT","CONTACT US"];

const Header = () => {
  const [value,setValue]=useState(0);
  const theme =useTheme();
  const isMatch =useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <ShoppingCartCheckout/>
                {isMatch ?
                (<>
                    <Typography sx={{fontSize:"2rem",paddingLeft:"7%"}}>SHOPEE</Typography>
                    <DrawerComponent/>
                </>)
                :
                (<>
                    <Tabs 
                        value={value} 
                        onChange={(e,val)=>setValue(val)}
                        textColor='inherit'
                        indicatorColor='secondary'
                        sx={{marginLeft:"auto"}}
                    >
                       {links.map((link,index)=>{
                           return <Tab key={index} label={link}/> 
                       })} 
                    </Tabs>
                    <Button variant='contained' sx={{marginLeft:"auto"}}>Log In</Button>
                    <Button variant='contained' sx={{marginLeft:"10px"}}>Sign Up</Button>
                </>)
            }
            </Toolbar>
        </AppBar> 
    </React.Fragment>
  )
}

export default Header
