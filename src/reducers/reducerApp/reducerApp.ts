import {getMyInfo} from './../reducerAuth/reducerAuth.js'
import {Dispatch} from 'redux'
import {AppStateType } from './../../stateRedux/stateRedux.ts'


const INISIALIZE = 'INISIALIZE';
const inisialState = {
	inisial:false
}

type InisialStateType = typeof inisialState
const appReducer = (state = inisialState, action:ActionType):inisialState=>{
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

type ActionType = InisialType 

type InisialType = {type: typeof INISIALIZE}

const inisial = (): InisialType=>{
	return {
		type:INISIALIZE
	}
} 


export const inisialSucses = () => (dispatch:Dispatch<ActionType>, getState:()=>AppStateType )=>{
	const promise = dispatch(getMyInfo())
	promise.then(()=>{
		dispatch(inisial())
	})
	
}

export default appReducer