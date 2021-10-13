import {authAPI} from './../../API/API.js'
import {stopSubmit} from 'redux-form'


const SET_CAPTCHA = 'SET_CAPTCHA'
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const SET_MY_ID = 'SET_MY_ID'
const DELETE_USER = 'DELETE_USER'





const inisialState = {
	login:{
		userId: null,
		email:null,
		login:null
	},
	isAuth:false,
	captcha:''
}

const reducerAuth =(state = inisialState ,action)=>{
	switch(action.type){
		case SET_USER_LOGIN:{
 			return {
				...state, login:{...action.data},isAuth:true
			}

		}
		case SET_MY_ID:{
			return{
				...state, userId:action.userId
			}
		}
		case DELETE_USER:{
			return{
				...state, isAuth: action.isAuth
			}
		}
		case SET_CAPTCHA:{
			return {
				...state,
				captcha:action.url
			}
		}
		default:
			return state
	}
	return state
}

// ACTION CREATE 



const setCaptcha = (url)=>{
	return{
		type:SET_CAPTCHA,
		url
	}
}
export const loagingUser = (userId, email, login)=>{
	return {
		type:SET_USER_LOGIN,
		data:{userId, email, login}
	}
}
export const setMyId = (myId)=>{
	return {
		type:SET_MY_ID,
		userId:myId
	}
}

export const isUser = (isAuth)=>{
	return {
		type:DELETE_USER,
		isAuth
	}
}


// THUNK CREATE 
export const getMyInfo =()=>{

	return (dispatch)=>{

		return authAPI.getMyInfo()
			.then (data=>{ 
				if(data.resultCode === 0 ){
					dispatch(loagingUser(data.data.id, data.data.email,data.data.login))
				}
			})


		
	}
}

export const setAuth = (formData)=>{
	return async (dispatch) =>{
		authAPI.setAuth(formData)
			.then(data =>{
				 
				if(data.resultCode === 0){
					dispatch(setMyId(data.data.userId));
					dispatch(getMyInfo())
					dispatch(isUser(true))

				}else {
					dispatch(stopSubmit('login', {_error:data.messages}))
					if(data.resultCode === 10){
					authAPI.setCaptcha()
						.then(data =>{
							
							dispatch(setCaptcha(data.url))})
					
				}
				}

			})

	}
}


export const deleteAuth = () =>{
	return (dispatch) =>{
		authAPI.setdelete()
			.then(data => {
				if(data.resultCode === 0){
					dispatch(loagingUser(null, null, null))
					dispatch(isUser(false))
				}
			})
	}
} 





export default reducerAuth;