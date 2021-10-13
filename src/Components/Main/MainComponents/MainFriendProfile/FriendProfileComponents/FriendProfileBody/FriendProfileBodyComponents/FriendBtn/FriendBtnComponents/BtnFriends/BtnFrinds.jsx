import {Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const BtnFriends =(props)=>{
	return (
          <NavLink className="d-grid text__none gap-2 my-2"to='/friendChat'><Button variant="secondary" style={{boxShadow:'none'}}>Написать</Button></NavLink>

		)
}

export default BtnFriends