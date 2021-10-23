import { chatAPI } from './../../API/chatApiWS'
const INSTALL_MESSAGE = 'MSN/chat/INSTALL_MESSAGE'
const DELETE_MESSAGE_FOR_CHAT = 'MSN/chat/DELETE_MESSAGE_FOR_CHAT'

const initialState = {
    message: []
}

const reducerChat = (state = initialState, action) => {
    switch (action.type) {
        case INSTALL_MESSAGE: {
            debugger
            return {
                
                ...state,
                message: [...state.message, ...action.payload.message]
            }
        }
        case DELETE_MESSAGE_FOR_CHAT :{
            return {
                ...state, 
                message: []
            }
        }
        default: {
            return state
        }
    }
}

//ACTION CREATE

const installMessage = (message) => ({
    type: INSTALL_MESSAGE,
    payload: {
        message
    }
})
const deleteMesssageForChat = () => ({
    type: DELETE_MESSAGE_FOR_CHAT,
    
})
//THUNK CREATE
let _messageListenerHandler = null
const messageListenerHandlerCreate = (dispatch) => {
    if (!_messageListenerHandler) {
        _messageListenerHandler = (message) => {
            dispatch(installMessage(message))
        }
    }
    return _messageListenerHandler
}

export const startMessagesListener = () => (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(messageListenerHandlerCreate(dispatch))

}

export const stopMessagesListener = () => (dispatch) => {
    chatAPI.stop()
    chatAPI.unSubscribe(messageListenerHandlerCreate(dispatch))
    dispatch(deleteMesssageForChat())
}
export const sendMessage = (message) => dispatch => {
    chatAPI.sendMessage(message)
}

export default reducerChat