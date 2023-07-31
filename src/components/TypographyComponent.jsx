import React from 'react'
import {Typography} from "@mui/material";

const TypographyComponent = () => {
  return (
    <div>
      <Typography variant='h1'>Heelo there</Typography>
      <Typography variant="h6">Heelo there</Typography>
      <Typography variant="h4">Heelo there</Typography>
      <Typography variant='body'>Heelo there</Typography>
      <Typography color={"seagreen"} variant="h6">Heelo there</Typography>
      <Typography variant="caption">Heelo there</Typography>
      <Typography variant="body2">Heelo there</Typography>
      
      <Typography variant="overline">Heelo there</Typography>
    </div>
  )
}

export default TypographyComponent;
