import React from 'react'
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';

const Nav = () => {
    return (
        <AppBar position="static" className="navbar">
  <Toolbar>
    <Typography variant="h6" >
    Sorting algorithms Visualizer
        </Typography>
  </Toolbar>
</AppBar>
    )
}

export default Nav
