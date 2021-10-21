
import { Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'


import ChatBodyMessage from './ChatBodyComponents/ChatBodyMessage/ChatBodyMessage.jsx'
import ChatBodyInput from './ChatBodyComponents/ChatBodyInput/ChatBodyInput.jsx'
import { useSelector } from 'react-redux'





const ChatBody = (props) => {
	const [message, steMessage] = useState([])
	const [ws, setWS] = useState(null)
	const [netWork, setNetWork] = useState(false)

	useEffect(() => {
		let newWS;
		const closeHandler = () => {
			setTimeout(createSocket, 3000)
		}

		function createSocket() {
			if (newWS) {
				newWS.removeEventListener('close', closeHandler)
				newWS.close()
			}
			newWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
			setWS(newWS)
			newWS.addEventListener('close', closeHandler)
		}
		createSocket()
		return () => {
			newWS.removeEventListener('close', closeHandler)
			newWS.close()
		}
	}, [])

	const setTrueForNetWork = () => {
		setNetWork(true)
	}
	useEffect(() => {
		if (!ws) return
		ws.addEventListener('close', setTrueForNetWork)
		return () => {
			ws.removeEventListener('close', setTrueForNetWork)
		}
	}, [ws])

	const setFalseForNetWork = () => {
		setNetWork(false)
	}
	useEffect(() => {
		if (!ws) return
		ws.addEventListener('open', setFalseForNetWork)
		return () => {
			ws.removeEventListener('open', setFalseForNetWork)
		}
	}, [ws])

	useEffect(() => {
		if (ws) {
			const messageHandler = (e) => {
				const parsed = JSON.parse(e.data)
				steMessage(prev => [...prev, ...parsed])
			}
			ws.addEventListener('message', messageHandler)
			return () => {
				ws.removeEventListener('message', messageHandler)
			}
		}
	}, [ws])
	
	return (
		<Col md='12' xs='12' className='mt-2 '	>
			<ChatBodyMessage message={message} />
			<ChatBodyInput ws={ws} />
		</Col>
	)
}


export default ChatBody;