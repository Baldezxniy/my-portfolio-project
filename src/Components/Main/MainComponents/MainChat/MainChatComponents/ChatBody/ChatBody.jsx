
import { Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'


import ChatBodyMessage from './ChatBodyComponents/ChatBodyMessage/ChatBodyMessage.jsx'
import ChatBodyInput from './ChatBodyComponents/ChatBodyInput/ChatBodyInput.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { startMessagesListener , stopMessagesListener, sendMessage, startStatusChangeListener, stopStatusChangeListener } from '../../../../../../reducers/reducerChat/reducerChat.js'





const ChatBody = (props) => {

	const message = useSelector(state => state.chatMessage.message)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(startStatusChangeListener())
		dispatch(startMessagesListener())
		return ()=>{
			dispatch(stopMessagesListener())
			dispatch(stopStatusChangeListener())
		}
	},[])
	
	const [isAutoScroll, setIsAutoScroll] = useState(true)

	const sendMessageUI =(message)=>{
		dispatch(sendMessage(message))
	}
	return (
		<Col md='12' xs='12' className='mt-2 '	>
			<ChatBodyMessage message={message} isAutoScroll={isAutoScroll} setIsAutoScroll={setIsAutoScroll}/>
			<ChatBodyInput sendMessageUI={sendMessageUI} setIsAutoScroll={setIsAutoScroll}/>
		</Col>
	)
}


export default ChatBody;