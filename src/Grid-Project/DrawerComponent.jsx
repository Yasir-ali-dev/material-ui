import { MenuOutlined } from '@mui/icons-material'
import { Drawer, IconButton,List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const DrawerComponent = ({links}) => {
    const [open,setOpen]=useState(false);

  return (
    <>
        <Drawer 
            anchor='left' 
            open={open} 
            onClose={()=>setOpen(false)}
            PaperProps={{
                sx:{
                    backgroundColor:"rgba(0,212,255,1)"
                }
            }}
        >
            <List>
                {
                    links.map((link,index)=>{
                        return (
                            <ListItemButton 
                                key={index} 
                                divider
                                onClick={()=>setOpen(false)}
                            >
                                <ListItemIcon>
                                    <ListItemText 
                                        sx={{ color:" rgba(141,73,182,1)"}}
                                    >
                                        {link}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        )
                    })
                }
               

            </List>
        </Drawer>
        <IconButton sx={{marginLeft:"auto"}} onClick={()=> setOpen(!open)}>
            <MenuOutlined />
        </IconButton>
    </>
  )
}

export default DrawerComponent
