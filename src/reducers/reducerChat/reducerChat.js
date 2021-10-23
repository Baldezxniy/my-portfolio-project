import { chatAPI } from './../../API/chatApiWS'
const INSTALL_MESSAGE = 'MSN/chat/INSTALL_MESSAGE'
const DELETE_MESSAGE_FOR_CHAT = 'MSN/chat/DELETE_MESSAGE_FOR_CHAT'
const STATUS_RESOLVE = 'MSN/chat/STATUS_RESOLVE'




const initialState = {
    message: [],
    statusChange: false
}

const reducerChat = (state = initialState, action) => {
    switch (action.type) {
        case INSTALL_MESSAGE: {
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
        case STATUS_RESOLVE:{
            return{
                ...state,
                statusChange: action.payload.statusChange
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

const statusChangeResolve = (statusChange)=>{
    return{
        type:STATUS_RESOLVE,
        payload:{statusChange}
    }
}

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
    chatAPI.subscribe('messages', messageListenerHandlerCreate(dispatch))

}

export const stopMessagesListener = () => (dispatch) => {
    chatAPI.stop()
    chatAPI.unSubscribe('messages', messageListenerHandlerCreate(dispatch))
    dispatch(deleteMesssageForChat())
}
export const sendMessage = (message) => dispatch => {
    chatAPI.sendMessage(message)
}


let _startStatusChangeHandler = null
const startStatusChangeHandlerCreate = (dispatch)=>{
    if(!_startStatusChangeHandler){
        _startStatusChangeHandler = (statusChange)=>{
           dispatch(statusChangeResolve(statusChange))
        }
    }
    return _startStatusChangeHandler
}

export const startStatusChangeListener = ()=> (dispatch) =>{
    chatAPI.subscribe('statusChange', startStatusChangeHandlerCreate(dispatch))
}  

export const stopStatusChangeListener = ()=> (dispatch) =>{
    chatAPI.subscribe('statusChange', startStatusChangeHandlerCreate(dispatch))
}  




export default reducerChat