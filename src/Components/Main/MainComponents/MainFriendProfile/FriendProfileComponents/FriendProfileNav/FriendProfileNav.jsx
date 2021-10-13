import 'bootstrap/dist/css/bootstrap.min.css';


import {Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const FriendProfileNav =(props)=>{
	return (
		<Col md='2' xs='12'>
			<Row>
				<Col xs='6' md='12' className='mx-auto nav__item my-3'>
					<NavLink to="/myfriend" >Назад</NavLink>
				</Col>
				<Col xs='6' md='12' className='mx-auto nav__item my-3'>
						<NavLink to="" className='active'></NavLink>
				</Col>
			</Row>
		</Col>
		)
}

export default FriendProfileNav;