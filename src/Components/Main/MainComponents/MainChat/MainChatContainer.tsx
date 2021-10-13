import MainChat from './MainChat.jsx'
import {connect} from 'react-redux'
import {addMessage, ChatUserType, MessageType} from './../../../../reducers/reducerChatProfileMessage/reducerChatProfileMessage.ts'
import {AppStateType} from './../../../../stateRedux/stateRedux.ts'


const mapStateToProps = (state: AppStateType)=>{
	
	return{
		chat: state.chatProfileMessage.chatUser as ChatUserType,
		chatMessage:state.chatProfileMessage.message as MessageType,
	}
}

type MapStateToPropsType = typeof mapStateToProps 

type MapDispatchToProps = {
	addMessage : (messageText: string) => void
}

const MainChatContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
														addMessage} )(MainChat)

export default MainChatContainer