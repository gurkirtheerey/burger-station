import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.test}>
      {props.children}
    </main>
  </Aux>

);

export default layout;