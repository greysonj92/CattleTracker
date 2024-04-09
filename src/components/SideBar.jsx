import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button'
import ListItemButton from '@mui/material/ListItemButton'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { List, ListItem, listItemButton, ListItemText, ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function pickIcon(text) {
    if (text === 'Log In') {
        return <LoginIcon></LoginIcon>
    }
    else if (text === 'Add Animal'){
        return <CreateIcon></CreateIcon>
    }
    else if (text === 'Log Out'){
        return <LogoutIcon></LogoutIcon>
    }
    else {
        return <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
    }
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Log In', 'Add Animal', 'Log Out'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton onClick={() => alert(`You clicked ${text}!`)}>
              <ListItemIcon>
               {pickIcon(text)} 
              </ListItemIcon>
            <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton 
        size="large"
        edge="start" 
        color="inherit" 
        aria-label='open drawer'
        sx={{ mr: 2 }}>
            <MenuIcon onClick={toggleDrawer(true)} />
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
        </IconButton>
    </div>
  );
}