import React from 'react';
import Card  from './components/Card';
import Data from './data.json';
import List from './components/uniqueList/List';
function App(){

  // let items = []
  /**
   * for loop
   */
  // for(let x= 0; x < Data.length; x++){
  //   items.push(<Card textTitle={Data[x].Name} desig={Data[x].Designation} descText={Data[x].desc}/>);
  // }
  /**
   * map
   */
  // items =Data.map((item)=> <Card textTitle ={item.Name}desig={item.Designation} descText={item.desc}/>)


    return  <div>
    {/* <h1 className='headingStyle largeText'>To Do App</h1>
    {/* {items} */}
    {/* {Data.map((item,index)=> <Card key={index} textTitle ={item.Name}desig={item.Designation} descText={item.desc}/>)} */} 
      
      <List />
      </div>

}
export default App;