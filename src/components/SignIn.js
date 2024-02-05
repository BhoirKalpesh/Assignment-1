import React from 'react';
import './signin.css';
import { Button } from '@chakra-ui/react';
//import { useAuth0 } from "@auth0/auth0-react";


function SignIn({onLogin}) {
  //const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h2 className='heading' style={{ fontSize: '24px' }}>Login to Pomodoro App</h2>
      <Button onClick={onLogin} colorScheme="blue" size="lg" fontSize="20px">
        Login
      </Button>
    </div>
  );
}

export default SignIn;
