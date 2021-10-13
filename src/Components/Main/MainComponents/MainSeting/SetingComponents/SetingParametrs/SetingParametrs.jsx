import {Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import SetingProfile from './ParametrsComponents/SetingProfile/SetingProfile.jsx'
import SetingSicret from './ParametrsComponents/SetingSicret/SetingSicret.jsx'
import SetingChat from './ParametrsComponents/SetingChat/SetingChat.jsx'
import SetingLang from './ParametrsComponents/SetingLang/SetingLang.jsx'
const SetingParametrs =(props)=>{
	return(
				<Row>
				<SetingProfile />
				<SetingSicret />
				<SetingChat />
				<SetingLang />
			</Row>
		)
}

export default SetingParametrs