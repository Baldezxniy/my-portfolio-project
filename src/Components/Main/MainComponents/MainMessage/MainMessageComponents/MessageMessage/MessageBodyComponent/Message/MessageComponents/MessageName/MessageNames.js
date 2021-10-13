import MessageName from './MessageName/MessageName.js'
import MessageSurname from './MessageSurname/MessageSurname.jsx'

const MessageNames =(props)=>{
	return(
		<div className='d-flex'>
			<MessageName name={props.messageName}/>
			< MessageSurname surname={props.messageSurname} />
		</div>
	)
}

export default MessageNames;