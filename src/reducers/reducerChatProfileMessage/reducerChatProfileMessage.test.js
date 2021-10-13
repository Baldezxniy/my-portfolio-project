import reducerChatProfileMessage, {deleteMessage, editMessage} from './reducerChatProfileMessage.js'

const state = {
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


it('test delete post', ()=>{
	const action = deleteMessage(4);
	const newState = reducerChatProfileMessage(state, action);
	console.log(newState.message.length)
	expect(newState.message.length).toBe(8)

})
