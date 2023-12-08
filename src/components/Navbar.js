import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './navbar.css';
import { Button } from '@chakra-ui/react';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout(); 
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <h1>Pomodoro</h1>
      </div>
      {isAuthenticated && ( 
        <div className="logout">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
