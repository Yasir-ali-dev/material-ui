import { Box } from '@mui/material';
import React from 'react';
import ContentItem from './ContentItem';

const contentArray=[
    {
        title:"Get Things Done",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi est dolorem optio eum recusandae alias vitae quisquamtatibus, corrupti quo illo quaerat minima mollitia inventore accusamus",
        img:"/1.jpg"
    },
    {
        title:"Productivity Is Brilliant",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi est dolorem optio eum recusandae alias vitae quisquam tatibus, corrupti quo illo quaerat minima mollitia inventore accusamus",
        img:"/2.jpg"
    },
    {
        title:"Fast Development",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi est dolorem optio eum recusandae alias vitae quisquamtatibus, corrupti quo illo quaerat minima mollitia inventore accusamus",
        img:"/3.jpg"
    }
]

const Content = () => {
  return (
    <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"10%"}
        justifyContent={"center"}
        bgcolor={"#fbf2f2"}

    >
        {contentArray.map((item,index)=>
                        <ContentItem key={index} swap={index%2===0} content={item}/>
        )}
    </Box>
  )
}

export default Content;
