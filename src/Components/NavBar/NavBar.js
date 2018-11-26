import React from 'react';
//import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const NavigationLinks = () => (
  <ToolbarGroup>
    <FlatButton label="Login"/>
    <FlatButton label="SignUp"/>
  </ToolbarGroup> 
);

const NavBar=() => <AppBar title="Pixabay Image Finder" iconElementRight={<NavigationLinks/>}/>

export default NavBar;