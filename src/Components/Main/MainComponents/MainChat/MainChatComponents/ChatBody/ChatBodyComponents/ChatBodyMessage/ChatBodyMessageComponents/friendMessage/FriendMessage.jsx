import 'bootstrap/dist/css/bootstrap.min.css';
import FriendMessageText from './friendMessageComponents/FriendMessageText/FriendMessageText.jsx'
import FriendMessageTime from './friendMessageComponents/FriendMessageTime/FriendMessageTime.jsx'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {useState, useEffect} from 'react'
const FriendMessage = (props) => {	

	return (
		
		<div className='mt-1  d-flex justify-content-start align-items-end'>
			<NavLink to={`/friendprofile/${props.userId}`}>
			      <Image  src={props.photo ? props.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiMxpScMGx9h_AuFfjulymvego8LOrItOKw&usqp=CAU'}  roundedCircle width='35'/>
			</NavLink>
			<div className=' mx-2	 friend_chat__mesage '>
				< FriendMessageText text={props.text}/>
				
				<div className='friend_chat__mesage d-inline chat__message__time'>
					<FriendMessageTime time={props.time} />
				</div>
			</div>
		</div >
		
		)
}

export default FriendMessage;