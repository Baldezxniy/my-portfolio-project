import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name.js'
import Surname from './Surname.js'
const MyName = (props) =>{
	return(
		<div className='my-3'>
    <Name  name={props.name}/>
    <Surname surname={props.surname}/>
    </div>
		)
}

export default MyName;

