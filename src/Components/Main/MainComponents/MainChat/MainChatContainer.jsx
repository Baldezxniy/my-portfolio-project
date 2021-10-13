import MainChat from './MainChat.jsx'
import {connect} from 'react-redux'
import {addMessageActionCreate} from './../../../../reducers/reducerChatProfileMessage/reducerChatProfileMessage.tsx'



const mapStateToProps = (state)=>{
	
	return{
		chat: state.chatProfileMessage.chatUser ,
		chatMessage:state.chatProfileMessage.message,
	}
}



	

const MainChatContainer = connect(mapStateToProps, {
														addMessage:addMessageActionCreate, 
													} )(MainChat)

export default MainChatContainer