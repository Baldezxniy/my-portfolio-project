import {getMyInfo} from './../reducerAuth/reducerAuth'
import {Dispatch} from 'redux'
import {AppStateType } from './../../stateRedux/stateRedux'
import {ThunkAction} from 'redux-thunk'

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
// Не знаю что должно быть вместо any по этому вернусь со временем
export const inisialSucses = ():ThunkAction<any, AppStateType, unknown, ActionsTypes> => (dispatch )=>{
	const promise = dispatch(getMyInfo())
	promise.then(()=>{
		dispatch(inisial())
	})
	
}

export default appReducer