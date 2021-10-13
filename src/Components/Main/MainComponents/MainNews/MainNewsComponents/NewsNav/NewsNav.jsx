import {Row, Col, Card} from 'react-bootstrap';
import{NavLink} from 'react-router-dom';

const NewsNav =(props)=>{
	return (
			<Col md='2' xs='12'>
				<Row >
					<Col xs='3' md='12' className='mx-auto nav__item my-3'>
						<NavLink to="/myprofile" >Назад</NavLink>
					</Col>
					<Col xs='3' md='12' className='  mx-auto nav__item my-3'>
							<NavLink to="/news" className='active'>Новости</NavLink>
					</Col>
				</Row>
			</Col>

		)
}

export default NewsNav;