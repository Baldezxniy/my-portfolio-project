import 'bootstrap/dist/css/bootstrap.min.css';

import FriendMessage from './ChatBodyMessageComponents/friendMessage/FriendMessage.jsx'
import MyMessage from './ChatBodyMessageComponents/MyMessage/MyMessage.jsx'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react'

const ChatBodyMessage = React.memo((props) => {
	const myId = useSelector(state => state.AuthUser.login.userId)
	const messageScrole = useRef(null)

	useEffect(() => {
		if (props.isAutoScroll) {
			if (!!messageScrole) {
				messageScrole.current.scrollIntoView({})
			}
		}
	}, [props.message])
	const onScrollChange = (e) => {

		const element = e.target
		if (element.scrollHeight - element.scrollTop == element.clientHeight) {
			if (!props.isAutoScroll) props.setIsAutoScroll(true)
		} else if (props.isAutoScroll) props.setIsAutoScroll(false)

	}
	return (
		<Row className='pb-2 block__message' onScroll={onScrollChange}>
			<div className='   d-flex flex-column justify-content-end ' >

				{props.message.map((m, index) => m.userId === myId ?
					<MyMessage text={m.message} time={m.time} key={index} /> :
					<FriendMessage text={m.message} time={m.time} photo={m.photo} userId={m.userId} key={index} />)}
			</div>
			<div ref={messageScrole}>

			</div>
		</Row>
	)
})

export default ChatBodyMessage;