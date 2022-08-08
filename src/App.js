import React from 'react';

import Card  from './components/Card';
function App(){
    return  <div>
    <h1 className='headingStyle largeText'>To Do App</h1>
    <Card textTitle="Call Mother" descText="Call Descriptions.1"/>
    <Card textTitle="Call Father" descText="Call Descriptions.2"/>
    <Card textTitle="Call Brother " descText="Call Descriptions.3"/>
    <Card textTitle="Call Sister" descText="Call Descriptions.4"/>
    <Card textTitle="Call Daughter" descText="Call Descriptions.5"/>
    <Card textTitle="Call Son" descText="Call Descriptions.6"/>
    
    
    
  </div>

}
export default App;