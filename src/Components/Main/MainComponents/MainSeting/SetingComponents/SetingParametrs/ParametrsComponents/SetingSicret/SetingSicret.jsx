import {Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const SetingSicret =(props)=>{
	return (
				<NavLink to="/seting/sicret" className='w-100  friend__no-style seting__items '>
					<Col sm='12' className='d-flex px-2 py-3 align-items-center '>
						<div className='mx-3 item__icon d-flex justify-content-center align-items-center' >К</div>
						<div>Конфиденциальность</div>
					
					</Col>
				</NavLink>
		)
}

export default SetingSicret