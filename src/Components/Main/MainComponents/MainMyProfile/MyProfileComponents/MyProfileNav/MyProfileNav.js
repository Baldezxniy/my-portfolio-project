import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
const MyPrifileNav = (props)=>{
	return(
		<Col md='2' xs='12'>
			<Row>
				<Col xs='3' md='12' className='mx-auto nav__item my-3'>
					<NavLink to="/myprofile" >Профиль</NavLink>
				</Col>
				<Col xs='3' md='12' className='mx-auto nav__item my-3'>
						<NavLink to="/message">Сообения</NavLink>
				</Col>
			</Row>
		</Col>

		)
}

export default MyPrifileNav