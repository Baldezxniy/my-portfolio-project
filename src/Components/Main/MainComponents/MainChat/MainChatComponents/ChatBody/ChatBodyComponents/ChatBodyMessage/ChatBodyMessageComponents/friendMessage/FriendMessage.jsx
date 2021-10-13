import 'bootstrap/dist/css/bootstrap.min.css';
import FriendMessageText from './friendMessageComponents/FriendMessageText/FriendMessageText.jsx'
import FriendMessageTime from './friendMessageComponents/FriendMessageTime/FriendMessageTime.jsx'
const FriendMessage = (props)=>{
	return(
		<div className='mt-1  d-flex justify-content-start'>
			<div className='  friend_chat__mesage '>
				< FriendMessageText text={props.text}/>
				
					<div className='friend_chat__mesage d-inline chat__message__time'>
						<FriendMessageTime time={props.time} />
					</div>
				</div>
				</div>
		)
}

export default FriendMessage;