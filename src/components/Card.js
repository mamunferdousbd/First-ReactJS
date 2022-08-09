// Variable Delearration


const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

// +++++ Component Create
function Card(props){
  

  const {textTitle,desig,descText}= props;// destructering 
  
  return <div className='card'>
  {/* <h3 className='cardTitle'>{props.textTitle}</h3> */}
  <h3 className='cardTitle'>{textTitle}</h3> 
  <h4 className='cardDesig'>{desig}</h4> 
  <p className='cardDesc'>{descText}</p>
  {/* <p className='cardDesc'>{props.descText}</p> */}
  <p className='cardFooter'>{dateName+"/"+monthName+"/"+yearName}</p>
</div>
}
export default Card;