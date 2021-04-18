import React from 'react'
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import {MenuIcon} from '@material-ui/icons';
const Nav = () => {
    return (
        <AppBar position="static" className="navbar">
  <Toolbar>
    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}
    <Typography variant="h6" >
    Sorting algorithms Visualizer
        </Typography>
  </Toolbar>
</AppBar>
    )
}

export default Nav
