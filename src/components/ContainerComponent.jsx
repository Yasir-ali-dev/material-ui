import { Container } from '@mui/material'
import React from 'react'

const ContainerComponent = () => {
  return (
    <>
      <Container maxWidth="xs" sx={{backgroundColor:"GrayText"}}>
        heelo
      </Container>
      <Container maxWidth="sm" sx={{backgroundColor:"GrayText"}}>
        heelo
      </Container>
      
      <Container maxWidth="lg" sx={{backgroundColor:"GrayText"}}>
        heelo
      </Container>
      <Container maxWidth="md" sx={{backgroundColor:"GrayText"}}>
        heelo
      </Container>
    </>
  )
}

export default ContainerComponent
