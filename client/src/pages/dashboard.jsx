import React from 'react'
import Logout from '../components/Logout/index'
import SideMenu from '../components/SideMenu'
import { Route, Switch } from "react-router-dom";
import Log from '../Log/index'
import Graphs from '../Graphs';

const Dashboard = () => {
    return (
      <>
        <SideMenu />
        <Switch>
          <Route exact path="/dashboard" component = {Graphs} />
          <Route exact path="/dashboard/log" component = {Log} />
        </Switch >
        
      </>
    )
  }

  export default Dashboard;