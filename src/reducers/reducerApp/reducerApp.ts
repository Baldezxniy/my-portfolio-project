import {getMyInfo} from './../reducerAuth/reducerAuth'
import {Dispatch} from 'redux'
import {AppStateType } from './../../stateRedux/stateRedux'


const INISIALIZE = 'INISIALIZE';
const inisialState = {
	inisial:false
}

type InisialStateType = typeof inisialState
const appReducer = (state = inisialState, action:ActionsTypes):InisialStateType=>{
	switch (action.type){
		case INISIALIZE:{
			return {
				...state, 
				inisial: true 
			}
		}
		default: {
			return state
		}
	}
}

type ActionsTypes = InisialType

type InisialType = {type: typeof INISIALIZE}

const inisial = (): InisialType=>{
	return {
		type:INISIALIZE
	}
} 

export const inisialSucses = () => (dispatch:Dispatch<ActionsTypes>, getState:()=>AppStateType )=>{
	//@ts-ignore
	dispatch(getMyInfo())
	//@ts-ignore
	promise.then(()=>{
		dispatch(inisial())
	})
	
}

export default appReducer