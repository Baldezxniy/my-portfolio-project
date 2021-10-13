import {Col , Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const SetingNav =(props)=>{
	return (
			<Col md='2' xs='12'>
				<Row>
					<Col xs='3' md='12' className='mx-auto nav__item my-3'>
						<NavLink to="/myprofile" >Профиль</NavLink>
					</Col>
					<Col xs='3' md='12' className='mx-auto nav__item my-3'>
							<NavLink to="seting" className='active'>Настройки</NavLink>
					</Col>
				</Row>
			</Col>
		)
}
export default SetingNav;