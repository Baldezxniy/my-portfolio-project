import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const FriendInfoFriends =(props)=>{
	return (
				<div className='my-1'>
					<NavLink className= "text__none"to='/friendfriends'><Button size='sm'variant="secondary" style={{boxShadow:'none', }}>Друзья</Button></NavLink>
				</div>
		)
}

export default FriendInfoFriends;