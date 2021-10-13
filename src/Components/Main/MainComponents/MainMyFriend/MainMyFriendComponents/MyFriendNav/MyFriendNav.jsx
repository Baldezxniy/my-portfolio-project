import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
const MyFriendNav =(props)=>{
	return (
		<Col md='2' xs='12' >
				<Row >
					<Col xs='3' md='12' className='mx-auto nav__item my-3'>
						<NavLink to="/myprofile" >Профиль</NavLink>
					</Col>
					<Col xs='3' md='12' className='mx-auto nav__item my-3'>
							<NavLink to="/myfriend" className='active'>Друзья</NavLink>
					</Col>
				</Row>
			</Col>
			
		)
}
 

export default MyFriendNav;