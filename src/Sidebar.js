import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./css/Sidebar.css"
import SidebarOptions from './SidebarOptions';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutLineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import ListAltIcon from "@material-ui/icons/ListAlt"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import {Button} from "@material-ui/core";

function Sidebar() {
    return (
        <div className = "sidebar" >
            {/* Twitter Icon */}
          <TwitterIcon className = "sidebar_twitterIcon" />  

            {/* Sidebar options */}
          <SidebarOptions active Icon = {HomeIcon}text = "Home"/>
          <SidebarOptions Icon = {SearchIcon} text = "Explore"/>
          <SidebarOptions Icon = {NotificationsNoneIcon} text = "Notifications"/>
          <SidebarOptions Icon = {MailOutLineIcon} text = "Messages"/>
          <SidebarOptions Icon = {BookmarkBorderIcon} text = "Bookmarks"/>  
          <SidebarOptions Icon = {ListAltIcon} text = "Lists"/>
          <SidebarOptions Icon = {PermIdentityIcon} text = "Profile"/>
          <SidebarOptions Icon = {MoreHorizIcon} text = "More"/>

          {/* Button->Tweet */}
          <Button 
          variant = "outlined" 
          className = "sidebar_tweet" 
          fullWidth
          >Tweet</Button>
        </div>
    )
}

export default Sidebar
