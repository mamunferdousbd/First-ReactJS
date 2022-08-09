import React from "react";
import { v4 as uuidv4 } from 'uuid';


const todos=[
{
    id: uuidv4(),
    title:"Todo Title 1",
    dec:"Todo desc 1"
},
{
    id:uuidv4(),
    title:"Todo Title 2",
    dec:"Todo desc 2"
},
{
    id:uuidv4(),
    title:"Todo Title 3",
    dec:"Todo desc 3"
},
{
    id:uuidv4(),
    title:"Todo Title 4",
    dec:"Todo desc 4"
}
]
const List =()=>{
    
return(
    <div>
        
        {todos.map((todo)=>{
            const {id,title,dec}=todo;
            return <div key={id}>
                <h3>{title}</h3>
                <p>{dec}</p>
            </div>
        })}

    </div>
)
}
export default List;