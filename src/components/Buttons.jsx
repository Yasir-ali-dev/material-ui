import React from 'react';
import { Button, IconButton, styled } from "@mui/material";
import { ArrowBackIos, ArrowForwardOutlined } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";

const Buttons = () => {
    const BlueButton = styled(Button)({
        backgroundColor: "lightpink",
        color: "purple",
        margin: 5,
        "&:hover": {
          backgroundColor: "blue",
        },
      });
    
      return (
        <React.Fragment>
          <Button variant="contained" size="small" color="warning">
            Text
          </Button>
          <Button variant="text" color="error" size="large">
            Contained
          </Button>
          <Button variant="outlined" color="success">
            Outlined
          </Button>
          <Button size="medium">primary</Button>
          <Button
            startIcon={<ArrowBackIos />}
            endIcon={<ArrowForwardOutlined />}
            variant="outlined"
            size="medium"
            sx={{
              "&:hover": {
                color: "black",
              },
            }}
            onClick={() => alert("primary")}
          >
            primary
          </Button>
    
          <IconButton size="small" aria-label="delete">
            <Delete color="error" />
          </IconButton>
          <BlueButton>BlueButton</BlueButton>
        </React.Fragment>
      );
}

export default Buttons
