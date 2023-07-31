import { Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { orange } from '@mui/material/colors';

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))

const Icons=styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:20,
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
}))

const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:10,
  [theme.breakpoints.up("sm")]:{
   display:"none" 
  }
}))

const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'sx={{display:{xs:"none",sm:"block"}}}>
          DARK PETS
        </Typography>
        <Pets sx={{display:{xs:"block",sm:"none"}}}>
        </Pets>
        <Search><InputBase placeholder='search..'></InputBase></Search>
        <Icons>
          <Badge badgeContent={4}  color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={4}  color="error">
            <Notifications/>
          </Badge>
          <Avatar  onClick={(e) => setOpen(true)} sx={{ bgcolor: orange[500] }}>N</Avatar>
        </Icons>
        <UserBox  onClick={(e) => setOpen(true)} > 
          <Avatar sx={{ bgcolor: orange[500] }}>N</Avatar>
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        onClose={()=> setOpen(false)}
        aria-labelledby="basic-demo-button"
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;
