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
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();  // Hook para la navegación

  // Función para manejar clics en los íconos
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <XIcon />
      </div>
      {/* Botón de Home */}
      <div className="sidebar-item" onClick={() => handleNavigation("/")}>
        <HomeIcon />
        <span>Home</span>
      </div>
      {/* Botón de Explore */}
      <div className="sidebar-item" onClick={() => handleNavigation("/explore")}>
        <SearchIcon />
        <span>Explore</span>
      </div>
      {/* Botón de Notifications */}
      <div className="sidebar-item" onClick={() => handleNavigation("/notifications")}>
        <NotificationsNoneIcon />
        <span>Notifications</span>
      </div>
      {/* Botón de Messages */}
      <div className="sidebar-item" onClick={() => handleNavigation("/messages")}>
        <MailOutlineIcon />
        <span>Messages</span>
      </div>
      {/* Botón de Bookmarks */}
      <div className="sidebar-item" onClick={() => handleNavigation("/bookmarks")}>
        <BookmarkBorderIcon />
        <span>Bookmarks</span>
      </div>
      {/* Botón de Jobs */}
      <div className="sidebar-item" onClick={() => handleNavigation("/jobs")}>
        <BusinessCenterIcon />
        <span>Jobs</span>
      </div>
      {/* Botón de Communities */}
      <div className="sidebar-item" onClick={() => handleNavigation("/communities")}>
        <PeopleOutlineIcon />
        <span>Communities</span>
      </div>
      {/* Botón de Premium */}
      <div className="sidebar-item" onClick={() => handleNavigation("/premium")}>
        <VerifiedIcon />
        <span>Premium</span>
      </div>
      {/* Botón de Verified Orgs */}
      <div className="sidebar-item" onClick={() => handleNavigation("/verified")}>
        <FlashOnIcon />
        <span>Verified Orgs</span>
      </div>
      {/* Botón de Profile */}
      <div className="sidebar-item" onClick={() => handleNavigation("/profile/@defaultuser")}>
        <PermIdentityIcon />
        <span>Profile</span>
      </div>
      {/* Botón de More */}
      <div className="sidebar-item" onClick={() => handleNavigation("/more")}>
        <PendingIcon />
        <span>More</span>
      </div>
    </div>
  );
}

export default Sidebar;
