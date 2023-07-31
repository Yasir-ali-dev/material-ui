import { Box } from '@mui/material';
import React from 'react';

const responsiveBox = () => {
  return (
    <Box 
        height={{sm:"550px",xs:"350px",lg:"1000px",md:"900px"}} 
        width={{sm:"550px",xs:"350px",lg:"1000px",md:"900px"}} 
        bgcolor={"pink"}>
    </Box>
  )
}

export default responsiveBox
