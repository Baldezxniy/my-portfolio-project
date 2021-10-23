
import { Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'


import ChatBodyMessage from './ChatBodyComponents/ChatBodyMessage/ChatBodyMessage.jsx'
import ChatBodyInput from './ChatBodyComponents/ChatBodyInput/ChatBodyInput.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { startMessagesListener , stopMessagesListener, sendMessage } from '../../../../../../reducers/reducerChat/reducerChat.js'





const ChatBody = (props) => {

	const message = useSelector(state => state.chatMessage.message)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(startMessagesListener())
		return ()=>{
			dispatch(stopMessagesListener())
		}
	},[])
	

	const sendMessageUI =(message)=>{
		dispatch(sendMessage(message))
	}
	return (
		<Col md='12' xs='12' className='mt-2 '	>
			<ChatBodyMessage message={message} />
			<ChatBodyInput sendMessageUI={sendMessageUI}/>
		</Col>
	)
}


export default ChatBody;