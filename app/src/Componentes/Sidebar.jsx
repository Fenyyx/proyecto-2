import React from "react";
import XIcon from '@mui/icons-material/X';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VerifiedIcon from '@mui/icons-material/Verified';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingIcon from '@mui/icons-material/Pending';
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import axios from "axios";



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <XIcon />
      </div>
      <div className="sidebar-item">
        <HomeIcon />
        <span>Home</span>
      </div>
      <div className="sidebar-item">
        <SearchIcon />
        <span>Explore</span>
      </div>
      <div className="sidebar-item">
        <NotificationsNoneIcon />
        <span>Notifications</span>
      </div>
      <div className="sidebar-item">
        <MailOutlineIcon />
        <span>Messages</span>
      </div>
      <div className="sidebar-item">
        <BookmarkBorderIcon />
        <span>Bookmarks</span>
      </div>
      <div className="sidebar-item">
        <BusinessCenterIcon />
        <span>Jobs</span>
      </div>
      <div className="sidebar-item">
        <PeopleOutlineIcon />
        <span>Communities</span>
      </div>
      <div className="sidebar-item">
        <VerifiedIcon />
        <span>Premium</span>
      </div>
      <div className="sidebar-item">
        <FlashOnIcon />
        <span>Verified Orgs</span>
      </div>
      <div className="sidebar-item">
        <PermIdentityIcon />
        <span>Profile</span>
      </div>
      <div className="sidebar-item">
        <PendingIcon />
        <span>More</span>
      </div>

    </div>
  );
}

export default Sidebar;
{/* <span><ButtonColors/></span> */}