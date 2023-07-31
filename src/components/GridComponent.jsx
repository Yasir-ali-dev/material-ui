
import { Box, Grid, styled } from '@mui/material'
import React from 'react'

const Item =styled(Box)`
    background-color: #413f3f;
    color: wheat;
`


const GridComponent = () => {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={8} md={6}>
                <Item>xs 8</Item>
            </Grid>
            <Grid item xs={4} md={6}>
                <Item>xs 4</Item>
            </Grid>
            <Grid item xs={8} lg={10}>
                <Item>xs 8</Item>
            </Grid>
            <Grid item xs={4} lg={2}>
                <Item   Item>xs 4</Item>
            </Grid>
        </Grid> 
        <Box m={5}></Box>
        <Grid container columnSpacing={{xs:1,sm:2,md:3,lg:4}} rowSpacing={2}>
            <Grid item xs={8} md={6}>
                <Item>xs 8</Item>
            </Grid>
            <Grid item xs={4} md={6}>
                <Item>xs 4</Item>  
            </Grid>
            <Grid item xs={8} lg={10}>
                <Item>xs 8</Item>
            </Grid>
            <Grid item xs={4} lg={2}>
                <Item   Item>xs 4</Item>
            </Grid>
        </Grid> 
        
        <Box m={5}></Box>
        <Grid container columnSpacing={2} columns={{ xs: 2, sm: 8, md: 9 ,lg:12}} >
            {Array.from(Array(6)).map((_, index) => (
                <Grid item  xs={2} sm={4} md={3} lg={3} key={index}>
                <Item>xs=2</Item>
                </Grid>
            ))}
        </Grid> 
    </>
  )
}

export default GridComponent
