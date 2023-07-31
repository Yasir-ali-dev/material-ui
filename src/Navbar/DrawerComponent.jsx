import {   MenuRounded } from '@mui/icons-material';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
const PAGES=["PRODUCTS","SERVICES","ABOUT","CONTACT US","Log In","Sign Out"];


const DrawerComponent = () => {
    const [openDrawer,setOpenDrawer]=useState(false);
  return (
    <>
      <Drawer 
        open={openDrawer} 
        onClose={()=>setOpenDrawer(false)}  
      >
        <List>
          {PAGES.map((page,index )=>{
            return(
              <ListItemButton key={index} onClick={()=> setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>
                      {page}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            )
          })}
          
        </List>
      </Drawer>
      <IconButton sx={{color:"white",marginLeft:"auto"}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuRounded />
        </IconButton>
    </>
  )
}

export default DrawerComponent


