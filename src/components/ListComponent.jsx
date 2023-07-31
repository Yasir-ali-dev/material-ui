import { BeachAccess, Image, Work } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

const ListComponent = () => {
  return (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Image />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
    </ListItem>
    <ListItem>
      <ListItemAvatar color='success'>
        <Avatar>
          <Work color='secondary' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Work" secondary="Jan 7, 2014" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <BeachAccess />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
  </List>
  )
}

export default ListComponent
