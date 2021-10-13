import 'bootstrap/dist/css/bootstrap.min.css';
import {Row } from 'react-bootstrap'
import FriendMessage from './ChatBodyMessageComponents/friendMessage/FriendMessage.jsx'
import MyMessage from './ChatBodyMessageComponents/MyMessage/MyMessage.jsx'


const ChatBodyMessage = (props) => {

	return (
	<Row className=' pb-2  block__message'>	
		<div className='   d-flex flex-column justify-content-end'>
			
			{props.chatMessage.map(m => m.myMessage ? 
				<MyMessage text={m.text} key={m.id} time={m.time} /> :
				 	<FriendMessage text={m.text} key={m.id} time={m.time} />)}
		</div>
	</Row>	
		)
}


export default ChatBodyMessage;