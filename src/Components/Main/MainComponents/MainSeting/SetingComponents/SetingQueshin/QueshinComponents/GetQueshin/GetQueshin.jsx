import { Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const GetQueshin =(props)=>{
	return (
		<NavLink to="/seting/leng" className='w-100  friend__no-style seting__items '>
			<Col sm='12' className='d-flex px-2 py-3 align-items-center '>
				<div className='mx-3 item__icon d-flex justify-content-center align-items-center' >
					?
				</div>
				<div>
					Часто задаваемые вопросы
				</div>
			</Col>
		</NavLink>
		)
}

export default GetQueshin;