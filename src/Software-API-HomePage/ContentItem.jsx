import { Box, Typography } from '@mui/material';
import React from 'react'

const ContentItem = ({content,swap}) => {
    const {title,img,description }=content;

  return (
    <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={10}
        bgcolor={!swap && "#fff"}
    >
        {swap ?(
        <>
            <Box>
                <Typography variant='h3' color={"#734950"} padding={3}>{title}</Typography>
                <Typography variant='caption' padding={3} >{description}</Typography>
            </Box>
            <img 
                src={img} 
                alt={title}
                loading='lazy'
                width={"50%"}
                style={{
                    boxShadow:"10xp 10px 20px #ccc",
                    marginLeft:"10%",
                    borderRadius:20,
                }}
                height={"300px"}
            />
        </>
        )
        :(
        <>
            <img 
                src={img} 
                alt={title}
                loading='lazy'
                width={"50%"}
                style={{
                    boxShadow:"10xp 10px 20px #ccc",
                    marginRight:"10%",
                    borderRadius:20,
                }}
                height={"300px"}
            />
            <Box>
                <Typography variant='h3' color={"#734950"} padding={3}>{title}</Typography>
                <Typography variant='caption' padding={3} >{description}</Typography>
            </Box>
        </>
        )}


    </Box>
  )
}

export default ContentItem
