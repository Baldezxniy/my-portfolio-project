import {Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const SetQueshin =(props)=>{
	return (
					<NavLink to="/seting/queshin" className='w-100  friend__no-style seting__items '>
						<Col sm='12' className='d-flex px-2 py-3 align-items-center '>
							<div className='mx-3'>
								Задать вопрос							
							</div>
						</Col>
					</NavLink>
		)
}

export default SetQueshin