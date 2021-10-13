import MessageNames from './MessageComponents/MessageName/MessageNames.js'
import MessageText from './MessageComponents/MessageText/MesageText.jsx'
const Message = (props)=>{
	return(
			<div className='d-flex flex-column message__item'>
				<MessageNames messageName={props.messageName} messageSurname={props.messageSurname} />
				
		 <MessageText messageText={props.messageText}/>
			</div>
		)
}

export default Message