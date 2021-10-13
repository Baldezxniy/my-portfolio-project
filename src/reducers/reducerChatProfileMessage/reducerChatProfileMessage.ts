const ADD_MESSAGE = 'ADD-MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE'
const EDIT_MESSADE = 'EDIT_MESSADE'

export type MessageType={
	id: number
	text: string 
	time: string
	myMessage: boolean
}
export type ChatUserType ={
	name: string
	surname: string 
	imge: string 
}
const initialState = {
      chatUser:{name:"Вова", surname:'', imge:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZNImsa1tMbiQ0h02380kPeTTcb9JtIBYkQ&usqp=CAU'} as ChatUserType,
      message:[
      {id:1, text:'1', time:'12:00', myMessage:false},
      {id:2, text:'2', time:'12:00', myMessage:true},
      {id:3, text:'3', time:'12:00', myMessage:true},
      {id:4, text:'4', time:'12:00', myMessage:false},
      {id:5, text:'5', time:'12:00', myMessage:false},
      {id:6, text:'6', time:'12:00', myMessage:false},
      {id:7, text:'7', time:'12:00', myMessage:false},
      {id:8, text:'Пойдем на пиво?', time:'12:00', myMessage:false},
      {id:9, text:'Денег нет', time:'12:00', myMessage:true}
      ] as Array<MessageType>,
}

type InitialStatetype = typeof initialState

const reducerChatProfileMessage =(state= initialState, action: ActionType):InitialStatetype=>{
	switch(action.type){
		case ADD_MESSAGE :{
			 	return  {
				...state, 
				message:[ ...state.message, {id:state.message.length + 1, text:action.messageText, time:'12:00', myMessage:true} ],
			}
			
		}
		case DELETE_MESSAGE:{
			return {
				...state, 
				message: state.message.filter(post => post.id != action.postId)
			}
		}
		default: 
			return state;

	}	
}

type ActionType = addMessageActionType | deleteMessageType


type addMessageActionType = {
	type: typeof ADD_MESSAGE
	messageText: string
} 

export const addMessage =(messageText:string):addMessageActionType => ({type: ADD_MESSAGE ,messageText})
	

type deleteMessageType = {
	type: typeof DELETE_MESSAGE,
	postId: number
} 
export const deleteMessage = (postId: number):deleteMessageType=>{
	return {
		type:DELETE_MESSAGE,
		postId
	}
}


export default reducerChatProfileMessage;	