import React from 'react';
import ReactDOM from 'react-dom';
// index.css import
// import './index.css'


const title = "To Do App";
const todotilte = "My Card"
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
    
    <div className='card'>
      <h3 className='cardTitle'>{todotilte}</h3>
      <p className='cardDesc'>{desc}</p>
      <p className='cardFooter'>{dateName+"/"+monthName+"/"+yearName}</p>
    </div>
    
  </div>


);
  



