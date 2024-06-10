import React from 'react';
import { FaHome, FaUserFriends, FaTasks, FaBoxOpen } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './BottomMenu.css';

const BottomMenu = () => {
    const location = useLocation();
    
    return (
        <div className="bottom-menu">
            <Link to="/home" className={`menu-item ${location.pathname === '/home' ? 'active' : ''}`}>
                <FaHome />
                <span>Home</span>
            </Link>
            <Link to="/friends" className={`menu-item ${location.pathname === '/friends' ? 'active' : ''}`}>
                <FaUserFriends />
                <span>Friends</span>
            </Link>
            <Link to="/tasks" className={`menu-item ${location.pathname === '/tasks' ? 'active' : ''}`}>
                <FaTasks />
                <span>Tasks</span>
            </Link>
            <Link to="/items" className={`menu-item ${location.pathname === '/items' ? 'active' : ''}`}>
                <FaBoxOpen />
                <span>Items</span>
            </Link>
        </div>
    );
};

export default BottomMenu;
