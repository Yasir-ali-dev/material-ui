import { Button, Typography, styled } from '@mui/material';
import React from 'react'


const StyledHeading=styled(Typography)`
    font-size: medium;
    color: #991f85;
    :hover{
        color: #10dada;
        background-color: antiquewhite;
    }
`;

const StyledButton =styled(Button)`
    background-color :green;
    :hover{
        background-color: pink;
    }
`;
const StyledComponents = () => {
  return (
    <div>
        <StyledHeading>Heading - Styling</StyledHeading>
        <StyledButton variant='contained'>Button - Styling</StyledButton>
    </div>
  )
}

export default StyledComponents;
