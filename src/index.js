import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
     
      <Auth0Provider
      domain="dev-1712tev8m5xctje4.us.auth0.com"
      clientId="SDB04BtJBvPRJuEkHnn59IR6glXO4Wre"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);


