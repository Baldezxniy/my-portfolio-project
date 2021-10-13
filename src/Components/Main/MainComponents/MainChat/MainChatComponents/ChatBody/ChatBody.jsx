
import {Col} from 'react-bootstrap'
import React from 'react'
import ChatBodyMessage from './ChatBodyComponents/ChatBodyMessage/ChatBodyMessage.jsx'
import ChatBodyInput from './ChatBodyComponents/ChatBodyInput/ChatBodyInput.jsx'


const ChatBody = (props)=> {
	const onSubmitMessage =(data)=>{
		
		props.addMessage(data.chatMessageText)
	}
	debugger
	return (
				<Col md='12' xs='12'  className='mt-2 '	>
					<ChatBodyMessage chatMessage={props.chatMessage} />
					<ChatBodyInput  onSubmit={onSubmitMessage} />
				</Col>
		)
}	


export default ChatBody;