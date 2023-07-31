import { Avatar, Box, Fab, Modal, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon } from '@mui/icons-material';

const StyledModal=styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})

const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",
})

const Add = () => {
    const[open,setOpen]=useState(false);
  return (
    <>
      <Tooltip title="Add" onClick={()=> setOpen(true)} sx={{position:"fixed", bottom:20,left:{xs:"calc(45%)", sm:30}}} > 
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>
    <StyledModal 
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor="whitesmoke" p="3" borderRadius={5}>
            <Typography variant="h6" color={"grey"} fontSize={20} textAlign={"center"}>Create Post</Typography>
        <UserBox>
            <Avatar width={30} height={30} src='https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80' />
            <Typography variant="span" fontWeight={500} >John Doe</Typography>
        </UserBox>
        <TextField
            sx={{width:"100%"}}     
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's is in your mind? "
            variant="standard"
        />    

        </Box>
    </StyledModal> 
    </>
  )
}

export default Add;
