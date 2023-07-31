import { Typography } from '@mui/material'
import React from 'react'

const ResponsiveText = () => {
  return (
    <div>
      <Typography fontSize={{sm:20,xs:15,md:25,lg:30,xl:35}} variant='h1'>This is responsive Text</Typography>
    </div>
  )
}

export default ResponsiveText
