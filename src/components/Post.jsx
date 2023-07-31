import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';

const Post = () => {
  return (
    <Card sx={{ maxWidth: "100%" }} mb={5}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
            <MoreVert/>
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="494"
      image="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareSharpIcon/>     
      </IconButton>
    </CardActions>
   
  </Card>
  )
}

export default Post;
