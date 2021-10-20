//@ts-ignore
import MainChat from './MainChat.tsx'
import {connect} from 'react-redux'
import {addMessage, ChatUserType, MessageType} from './../../../../reducers/reducerChatProfileMessage/reducerChatProfileMessage'
import {AppStateType} from './../../../../stateRedux/stateRedux'

type MapStateToPropsType = {
	chat: ChatUserType
	chatMessage: Array<MessageType>
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType =>{
	
	return{
		chat: state.chatProfileMessage.chatUser as ChatUserType,
		chatMessage:state.chatProfileMessage.message as Array<MessageType>,
	}
}




const MainChatContainer = connect<MapStateToPropsType, null, {}, AppStateType>(mapStateToProps,  )(MainChat)

export default MainChatContainer