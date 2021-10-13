import {Row, Col, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import BtnSubscribe from './FriendBtnComponents/BtnSubscribe/BtnSubscribe.jsx'
import BtnFriends from './FriendBtnComponents/BtnFriends/BtnFrinds.jsx'
const FriendBtn = (props)=>{
	return (
<Row>
        <Col xs='12' sm='6' md='3'>
        <BtnSubscribe isFollowProgeress={props.isFollowProgeress}follow={props.follow} myFriends={props.myFriends} idUser={props.idUser} users={props.users} followClick={props.followClick} unFollowClick={props.unFollowClick}/>
        <BtnFriends />
	</Col>
</Row>
		)
}

export default FriendBtn