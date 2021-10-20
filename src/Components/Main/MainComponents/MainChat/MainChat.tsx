
import { Row, Col} from 'react-bootstrap';
import ChatNav from './MainChatComponents/ChatNav/ChatNav.jsx'
import ChatFriendProfile from './MainChatComponents/ChaProfileFriend/ChatFrindProfile.jsx'
import ChatBody from './MainChatComponents/ChatBody/ChatBody.jsx'
import { ChatUserType, MessageType } from '../../../../reducers/reducerChatProfileMessage/reducerChatProfileMessage.js';


type PropsType = {
	chatMessage:Array<MessageType>
	addMessage: ()=> void
	chat: ChatUserType
}
const MainChat:React.FC<PropsType> = (props)=>{
		
	return (
		<Row >
			<Col md='12' xs='12' className=' py-2 header__chat sticky-top'>
				<Row>
					<ChatNav />
					<ChatFriendProfile chat={props.chat}/>
				</Row>
				</Col>
				<ChatBody />
			</Row>
		)
}

export default MainChat