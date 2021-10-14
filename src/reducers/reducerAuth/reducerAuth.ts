import {authAPI, SetAuthData} from './../../API/API'
import {stopSubmit} from 'redux-form'
import {Dispatch} from 'redux'
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../stateRedux/stateRedux';

const SET_CAPTCHA = 'SET_CAPTCHA'
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const SET_MY_ID = 'SET_MY_ID'
const DELETE_USER = 'DELETE_USER'





const inisialState = {
	login:{
		userId: null as number | null,
		email:null as string | null,
		login:null as string | null
	},
	isAuth:false,
	captcha:null as string | null,
}
type InisialState = typeof inisialState 
const reducerAuth =(state = inisialState ,action: ActionsTypes):InisialState=>{
	switch(action.type){
		case SET_USER_LOGIN:{
 			return {
				...state, login:{...action.data},isAuth:true
			}

		}
		case SET_MY_ID:{
			return{
				...state, login:{...state.login,  userId:action.userId}
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


type ActionsTypes = SetCaptchaType | LoagingUserType | SetMyIdType | IsUserType
// ACTION CREATE 


type SetCaptchaType = {type : typeof SET_CAPTCHA, url : string}
const setCaptcha = (url: string ):SetCaptchaType=>{
	return{
		type:SET_CAPTCHA,
		url
	}
}
type LoagingUserType ={
	type: typeof SET_USER_LOGIN 
	data:{userId:number | null ,email: string | null, login: string | null}
}
export const loagingUser = (userId: number | null, email: string | null, login:string | null ):LoagingUserType=>{
	return {
		type:SET_USER_LOGIN,
		data:{userId, email, login}
	}
}
type SetMyIdType ={
	type: typeof SET_MY_ID
	userId: number 
}
export const setMyId = (myId: number):SetMyIdType=>{
	return {
		type:SET_MY_ID,
		userId:myId
	}
}
type IsUserType = {type: typeof DELETE_USER, isAuth: boolean}
export const isUser = (isAuth: boolean):IsUserType=>{
	return {
		type:DELETE_USER,
		isAuth
	}
}


// THUNK CREATE 
export const getMyInfo =(): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>=>{

	return (dispatch, getState)=>{

		return authAPI.getMyInfo()
			.then (data=>{ 
				if(data.resultCode === 0 ){
					dispatch(loagingUser(data.data.id, data.data.email,data.data.login))
				}
			})


		
	}
}
export const setAuth = (formData : SetAuthData)=>{
	return async (dispatch: Dispatch<ActionsTypes>) =>{
		authAPI.setAuth(formData)
			.then(data =>{
				 
				if(data.resultCode === 0){
					dispatch(setMyId(data.data.userId));
					//@ts-ignore
				 	dispatch(getMyInfo())
					dispatch(isUser(true))

				}else {
					//@ts-ignore
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
	return (dispatch:Dispatch<ActionsTypes>) =>{
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