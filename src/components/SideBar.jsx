import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { List, ListItem, listItemButton, ListItemText, ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Log In', 'New Animal', 'Log Out'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <listItemButton>
              <ListItemIcon>
              </ListItemIcon>
            <ListItemText primary={text} />
            </listItemButton>
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