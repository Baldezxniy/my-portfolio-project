
import {Col} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'


import ChatBodyMessage from './ChatBodyComponents/ChatBodyMessage/ChatBodyMessage.jsx'
import ChatBodyInput from './ChatBodyComponents/ChatBodyInput/ChatBodyInput.jsx'
import { useSelector } from 'react-redux'





const ChatBody = (props)=> {
	const [message, steMessage] = useState([])
	
	const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

	useEffect(()=>{

		ws.addEventListener('message',(e) =>{
			let parsed = JSON.parse(e.data)
			steMessage(prev => [...prev, ...parsed])
		})
	
	},[])
	return (
				<Col md='12' xs='12'  className='mt-2 '	>
					<ChatBodyMessage message={message} />
					<ChatBodyInput ws={ws}  />
				</Col>
		)
}	


export default ChatBody;