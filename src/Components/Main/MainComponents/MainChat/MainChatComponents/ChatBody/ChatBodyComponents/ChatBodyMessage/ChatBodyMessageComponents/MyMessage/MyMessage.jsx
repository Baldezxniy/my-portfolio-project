import 'bootstrap/dist/css/bootstrap.min.css';
import MyMessageTime from './MyMessageComponents/MyMessageTime/MyMessageTime.jsx'

import MyMessageText from './MyMessageComponents/MyMessageText/MyMessageText.jsx'
const MyMessage = (props)=>{
	
	return (
		<div  className=' mt-1 d-flex justify-content-end message__break '>
			<div className='my_chat__mesage  '>
					<MyMessageText  text={props.text}/>
					<div className=' d-inline align-self-end chat__message__time text-muted '>
						<MyMessageTime  time={props.time}/>
					</div>
				</div>	 
			</div>
				
		)
}

export default MyMessage ;