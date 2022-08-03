import React from 'react';
import ReactDOM from 'react-dom';
// index.css import
// import './index.css'

const title = "Welcome";
const subtitle = "To my-app";
const desc = "Wo es du sanftes ja du gar ort lange. Im friedlich komm wie sanftes mal, hast der du ergötzt helle." ;
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();
// Internal CSS
// const headingStyle={
//   backgroundColor:"purple",
//   color:"red",
//   textAlign:"center",
//   padding:"15px"
// };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='headingStyle largeText'>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{desc}</p>
    <p>{dateName+"/"+monthName+"/"+yearName}</p>
  </div>


);
  



