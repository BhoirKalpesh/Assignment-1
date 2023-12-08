
import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from '@chakra-ui/react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await loginWithRedirect();
    } catch (error) {
      console.error('Login Error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress isIndeterminate color='green.300' size='120px'/>
        </div>
      )}
      { !isLoading && isAuthenticated ? (
        <>
          <Navbar />
          <Home />
        </>
      ) : (
        <SignIn onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
