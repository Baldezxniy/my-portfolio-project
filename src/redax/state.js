import reducerChatProfileMessage from './../reducers/reducerChatProfileMessage/reducerChatProfileMessage.js'
import reducerMyProfilePage from './../reducers/reducerMyProfilePage/reducerMyProfilePage.js'
import reducerMessageData from './../reducers/reducerMessageData/reducerMessageData.js'

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';


const store = {

  _state : {
    messageData : [ 
      {id:1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZNImsa1tMbiQ0h02380kPeTTcb9JtIBYkQ&usqp=CAU', name:"Вова", surname:'', text:'', time:"12:13"},
      {id:2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E6dTVFT8xYH-ud1FIGh68NRgxthvGxRV3A&usqp=CAU", name:"Вика", surname:"Пирогова", text:"Пойдем гулять?", time:"22:23"},
      {id:3, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwK0vjAT-oReE-ZKem3kMJAGC7yOkGZvpIw&usqp=CAU", name:"Паша", surname:"Федоров", text:"Я никуда не пойду!", time:"21:03"},
      {id:4, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0PmbI-xEicV0zKlRIZ4qVCuwuknH4fZZCQ&usqp=CAU", name:"Саша", surname:"", text:"ТЫ что делаешь?", time:"20:39"},
      {id:5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU", name:"Кирилл", surname:"", text:"Что?", time:"19:53"},
      {id:6, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU", name:"Федя", surname:"Ириков", text:"Не знаю", time:"19:51"},
      {id:7, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FqycQiSj3n0ahNrNAS6ebet8L3YoqIeedA&usqp=CAU", name:"Максим", surname:"Петров", text:"Да иди ты", time:"18:39"},
      {id:8, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBhN3xCWonWztKURwk75Ek74jY9Vs17Etaw&usqp=CAU", name:"Андрей", surname:"", text:"Пойдем на пиво?", time:"16:21"},
      {id:9, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyINjjtAtXlkzUnthpA0IKWwuzsWbFy2Bwsg&usqp=CAU", name:"Настя", surname:"", text:"Я скучаю", time:"12:54"},
      {id:10, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvfU8nRol-ezAl4t4DGlKGOKPhK79tf6_pg&usqp=CAU", name:"Валера", surname:"", text:"Чего игрноришь ?", time:"00:33"},
    ],
    chatProfileMessage:{
      chatUser:{name:"Вова", surname:'', imge:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZNImsa1tMbiQ0h02380kPeTTcb9JtIBYkQ&usqp=CAU'},
      message:[],
      messageText: ''
    },
    myProfilePage :{
      myInfo: [{ name:"Валера", surname:"", study:"Винницкой", sity:'Винница', imge:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTXqLKfL7A9wBcsscl7j8bVLBs0CztV-Sow&usqp=CAU"},],
      MyPost:[],
      newPostText: "",
    }
  },  

  
  getState (){
    return this._state
  },
  _renderMyTree (){
    
  },
  subscribe (observer){ 
    this._renderMyTree = observer;

  },

  dispatch(action){
    this._state.messageData = reducerMessageData(this._state.messageData, action)  
    this._state.myProfilePage = reducerMyProfilePage(this._state.myProfilePage, action)
    this._state.chatProfileMessage = reducerChatProfileMessage(this._state.chatProfileMessage, action, this._state.messageData)
    this._renderMyTree(this.getState())

  }
}




export default store 