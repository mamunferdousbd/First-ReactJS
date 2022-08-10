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

  const users =[
    {
      FullName:"Abdullah Al Mamun",
      Age:32,
      phones : [{Home:"0178956221",Office:"01789458231"}]
    },
    {
      FullName:"Abdullah Al Hasan",
      Age:32,
      phones : [{Home:"0176221",Office:"01789451"}]
    }
  ]


    return  <div>
    {/* <h1 className='headingStyle largeText'>To Do App</h1>
    {/* {items} */}
    {/* {Data.map((item,index)=> <Card key={index} textTitle ={item.Name}desig={item.Designation} descText={item.desc}/>)} */} 
      
      {/* <List /> */}
      <h1>Nasted Lists</h1>
      {users.map((user,index)=> (<article key={index}>
        <h3>Full Name:{user.FullName}</h3>
        <p>Age:{user.Age}</p>
        {user.phones.map((phone,index)=>(<div key={index}>
          <p>Home:{phone.Home}</p>
          <p>Office:{phone.Office}</p>
        </div>))}
      </article>))}
      </div>

}
export default App;