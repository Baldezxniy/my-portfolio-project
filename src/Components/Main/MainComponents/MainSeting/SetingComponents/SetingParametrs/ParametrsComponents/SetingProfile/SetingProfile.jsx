import {Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const SetingProfile =(props)=>{
	return (
				<NavLink to="/seting/profile" className='w-100  friend__no-style seting__items '>
					<Col sm='12' className='d-flex px-2 py-3 align-items-center '>
						<div className='mx-3 item__icon d-flex justify-content-center align-items-center' >
							И
						</div>
						<div>
							Изменить профиль
						</div>
					</Col>
				</NavLink>
		)
}

export default SetingProfile;