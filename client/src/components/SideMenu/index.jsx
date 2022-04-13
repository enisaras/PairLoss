
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart, FaChartBar } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai"


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./SideMenu.css";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch} from "react-router-dom";
import Logout from '../Logout/index'


const SideMenu = () => {

  
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "" : "Menu"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={window.location.pathname === "/dashboard"} icon={<FaChartBar />}>
                <div className="MenuText">
                Dashboard
                <Link to = {'/dashboard'} />
                </div>
              </MenuItem >
              <MenuItem active={window.location.pathname === "/dashboard/log"}icon={<FaList />}>
                  Log
                  <Link to = {'/dashboard/log'} />
                </MenuItem>
              <MenuItem active={window.location.pathname === "/dashboard/team"}icon={<AiOutlineTeam />}>Team
                    <Link to = {'/dashboard/team'} />
              </MenuItem>
              <MenuItem active={window.location.pathname === "/dashboard/track"}icon={<RiPencilLine />}>
                    Track
                  <Link to = {'/dashboard/track'} />
              </MenuItem>
              <MenuItem active={window.location.pathname === "/dashboard/settings"}icon={<BiCog />}>
                  Settings
                  <Link to = {'/dashboard/settings'} />
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem onClick={Logout} icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideMenu;