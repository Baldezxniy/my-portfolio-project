import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import { Col} from 'react-bootstrap'

const ChatNav = (props) => {
	return (
		<Col   className=' nav__item'>
							<NavLink to="/message">Назад</NavLink>
		</Col>
		)
}

export default ChatNav;



