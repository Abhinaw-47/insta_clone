import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from '../src/redux/reducers/store.js'
import { GoogleOAuthProvider } from "@react-oauth/google"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
     <GoogleOAuthProvider clientId='372831751263-i3424cabudfp3r0n2e5v818he7ueh1no.apps.googleusercontent.com'>
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
    </MantineProvider>
  </StrictMode>,
)
