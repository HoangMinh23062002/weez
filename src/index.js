import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Slider from '../src/components/containers/slider';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Contact from './components/pages/contactpage';
import Blogspage from './components/pages/blogspage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Slider />
    {/* <App></App> */}
    <Contact></Contact>
    <Blogspage></Blogspage>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
