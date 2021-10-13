import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderLogoText.scss'
import {Col, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const HeaderLogoText =(props)=>{
	
	return(
		<Col xs='6' sm='6' className='d-flex justify-content-end'>
			{props.isAuth ? props.login : 
				<NavLink to='/login'>
					<Button variant='secondary' size='sm' className='px-2' style={{boxShadow:'none'}}>Login..</Button>
				</NavLink>}
		</Col>
		)
}


export default HeaderLogoText;