const ADD_MESSAGE = 'ADD-MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE'
const EDIT_MESSADE = 'EDIT_MESSADE'

type MessageType={
	id: boolean | null
	text: string 
	time: string
	myMessage: boolean
}
type ChatUserType ={
	name: number
	surname: string 
	imge: string 
}
export type InitialStatetype ={
    chatUser: ChatUserType
    message:Array<MessageType>
}

const initialState:InitialStatetype = {
      chatUser:{name:"Вова", surname:'', imge:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZNImsa1tMbiQ0h02380kPeTTcb9JtIBYkQ&usqp=CAU'},
      message:[
      {id:1, text:'Ты хуй', time:'12:00', myMessage:false},
      {id:2, text:'Нет ты хуй', time:'12:00', myMessage:true},
      {id:3, text:'я программист', time:'12:00', myMessage:true},
      {id:4, text:'Ой попизди там', time:'12:00', myMessage:false},
      {id:5, text:'Ты хуй', time:'12:00', myMessage:false},
      {id:6, text:'Ты хуй', time:'12:00', myMessage:false},
      {id:7, text:'Ты хуй', time:'12:00', myMessage:false},
      {id:8, text:'Пойдем на пиво?', time:'12:00', myMessage:false},
      {id:9, text:'Денег нет', time:'12:00', myMessage:true}
      ],
}


const reducerChatProfileMessage =(state= initialState, action:string):InitialStatetype=>{
	switch(action.type){

		case ADD_MESSAGE :{
			debugger
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

type addMessageActionType = {
	type: typeof ADD_MESSAGE
	messageText: string
} 

export const addMessageActionCreate =(messageText:string):addMessageActionType => ({type: ADD_MESSAGE ,messageText})
	
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