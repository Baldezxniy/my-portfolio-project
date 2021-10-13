import {Row, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';



const SetingSize =(props)=>{
	return (
				<Row className='seting__border'>
					<NavLink to="/seting/text" className='w-100  friend__no-style seting__items '>
						<Col sm='12' className='d-flex px-2 py-3 align-items-center '>
							<div className='mx-3 item__icon d-flex justify-content-center align-items-center' >
								T
							</div>
							<div>
								Размер текста
							</div>
	
						</Col>
					</NavLink>

				</Row>
		)
}

export default SetingSize