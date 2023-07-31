import { AppBar, Button, IconButton, Menu, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const AppbarComponent = () => {
    const [value,setValue]=useState(0);
  return (
    <AppBar position="sticky">
        <Toolbar>
        <Tabs textColor='secondary' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)} aria-label="basic tabs example">
            <Tab label="Item One"  />
            <Tab label="Item Two"  />
            <Tab label="Item Three"/>
        </Tabs>
          <Button sx={{marginLeft:"auto"}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  )
}

export default AppbarComponent
