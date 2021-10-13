
import { Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import ChatNav from './MainChatComponents/ChatNav/ChatNav.jsx'
import ChatFriendProfile from './MainChatComponents/ChaProfileFriend/ChatFrindProfile.jsx'
import ChatBody from './MainChatComponents/ChatBody/ChatBody.jsx'
const MainChat = (props)=>{
		
	return (
		<Row >
			<Col md='12' xs='12' className=' py-2 header__chat sticky-top'>
				<Row>
					<ChatNav />
					<ChatFriendProfile chat={props.chat}/>
				</Row>
				</Col>
				<ChatBody chatMessage={props.chatMessage} addMessage={props.addMessage}/>
			</Row>
		)
}

export default MainChat