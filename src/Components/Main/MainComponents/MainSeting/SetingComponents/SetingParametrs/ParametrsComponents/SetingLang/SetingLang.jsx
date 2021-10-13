import {Col } from 'react-bootstrap';

import {NavLink} from 'react-router-dom';



const SetingLang =(props)=>{
	return (

		<NavLink to="/seting/lang" className='w-100  friend__no-style seting__items '>
			<Col sm='12' className='d-flex px-2 py-3 '>
				<div className='mx-3 item__icon d-flex justify-content-center align-items-center' >
					Я
				</div>
				<div>
					Языки
				</div>
			</Col>
		</NavLink>
		)
}
export default SetingLang