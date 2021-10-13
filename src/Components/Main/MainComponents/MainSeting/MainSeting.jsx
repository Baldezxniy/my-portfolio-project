import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import SetingNav from './SetingComponents/SetingNav/SetingNav.jsx'
import SetingParametrs from './SetingComponents/SetingParametrs/SetingParametrs.jsx'
import SetingSize from './SetingComponents/SetingSize/SetingSize.jsx'
import SetingQuesin from './SetingComponents/SetingQueshin/SetingQueshin.jsx'


const MainSeting=(props)=>{
	return (
		<Row>
			<SetingNav />
			<Col md= '10' xs='12' >
				<SetingParametrs />
				<SetingSize />
				<SetingQuesin />
			</Col> 
		</Row>
	)
}


export default MainSeting