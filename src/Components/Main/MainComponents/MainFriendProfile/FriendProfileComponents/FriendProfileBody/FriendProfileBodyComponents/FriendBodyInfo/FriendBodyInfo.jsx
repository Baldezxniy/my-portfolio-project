import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Image, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import FriendInfoImg from './FriendBodyInfoComponents/FriendInfoImg/FriendInfoImg.jsx'
import FriendInfoData from './FriendBodyInfoComponents/FriendInfoData/FriendInfoData.jsx'
import FriendInfoFriends from './FriendBodyInfoComponents/FriendInfoFriends/FriendInfoFriends.jsx'
const FriendBodyInfo =(props)=>{
	
	return (
			<Row>
				<FriendInfoImg imge={props.imge}/>
				<Col xs='6' md='9'>
					<FriendInfoData name={props.name} surname={props.surname} city={props.city} universal={props.universal}/>
					<FriendInfoFriends follow={props.follow} />
				
			</Col>
		</Row>
		)
}

export default FriendBodyInfo;