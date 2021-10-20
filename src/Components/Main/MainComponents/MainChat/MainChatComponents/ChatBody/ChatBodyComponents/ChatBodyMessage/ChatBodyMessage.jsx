import 'bootstrap/dist/css/bootstrap.min.css';

import FriendMessage from './ChatBodyMessageComponents/friendMessage/FriendMessage.jsx'
import MyMessage from './ChatBodyMessageComponents/MyMessage/MyMessage.jsx'
import {Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'

const ChatBodyMessage = (props) => {
	const myId = useSelector(state => state.AuthUser.login.userId)

	
	return (
	<Row className='pb-2 block__message'>	
		<div className='   d-flex flex-column justify-content-end'>
			
			{props.message.map((m, index) => m.userId === myId ? 
				<MyMessage text={m.message} time={m.time} /> :
				 	<FriendMessage text={m.message} time={m.time} />)}
		</div>
	</Row>	
		)
}
 
export default ChatBodyMessage;