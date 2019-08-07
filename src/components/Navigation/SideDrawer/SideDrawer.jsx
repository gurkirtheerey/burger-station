import React from 'react';
import Logo from "../../UI/Logo/Logo";
import Navigationitems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = props => {
  // conditionally attach CSS classes for animations
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <Navigationitems />
      </nav>
    </div>
  );
};

export default sideDrawer;