const MessageText =(props)=>{
	return (
		<div className='justify-self-end mx-2 pt-1 text-muted message__text'>
					{props.messageText}
				</div>
		)
}

export default MessageText;