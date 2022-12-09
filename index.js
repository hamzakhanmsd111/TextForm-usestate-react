import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';



import TextForm from './TextForm';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

 
  <Navbar/>


 <div className='container my-2'>
  
  <TextForm heading="Enter text below"/>
  </div>/

  
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
