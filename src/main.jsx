import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({
  reducer:rootReducer,
});

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <BrowserRouter>
 
  <App />
  <ToastContainer/>
     
    </BrowserRouter>
</Provider>
  
  
  
)
