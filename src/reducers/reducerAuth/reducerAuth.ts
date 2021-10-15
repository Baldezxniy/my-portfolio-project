import { authAPI, SetAuthData } from './../../API/API'
import { stopSubmit } from 'redux-form'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from '../../stateRedux/stateRedux';

const SET_CAPTCHA = 'SET_CAPTCHA'
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const SET_MY_ID = 'SET_MY_ID'
const DELETE_USER = 'DELETE_USER'

const inisialState = {
	login: {
		userId: null as number | null,
		email: null as string | null,
		login: null as string | null
	},
	isAuth: false,
	captcha: undefined as string | undefined,
}
type InisialState = typeof inisialState
const reducerAuth = (state = inisialState, action: ActionsTypes): InisialState => {
	switch (action.type) {
		case SET_USER_LOGIN: {
			return {
				...state, login: { ...action.data }, isAuth: true
			}

		}
		case SET_MY_ID: {
			return {
				...state, login: { ...state.login, userId: action.userId }
			}
		}
		case DELETE_USER: {
			return {
				...state, isAuth: action.isAuth
			}
		}
		case SET_CAPTCHA: {
			return {
				...state,
				captcha: action.url
			}
		}
		default:
			return state
	}
	return state
}


type ActionsTypes = InferActionsTypes<typeof actions>
// ACTION CREATE 


export const actions = {
	setCaptcha: (url: string) => ({ type: SET_CAPTCHA, url } as const),
	loagingUser: (userId: number | null, email: string | null, login: string | null) => ({ type: SET_USER_LOGIN, data: { userId, email, login } }as const),
	setMyId: (myId: number) => ({ type: SET_MY_ID, userId: myId } as const ),
	isUser: (isAuth: boolean) => ({ type: DELETE_USER, isAuth }as const )
}

// THUNK CREATE 
export const getMyInfo = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {

	return (dispatch, getState) => {

		return authAPI.getMyInfo()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(actions.loagingUser(data.data.id, data.data.email, data.data.login))
				}
			})



	}
}
export const setAuth = (formData: SetAuthData): ThunkAction<any, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch) => {
		const data = await authAPI.setAuth(formData)

		if (data.resultCode === 0) {
			dispatch(actions.setMyId(data.data.userId));
			dispatch(getMyInfo())
			dispatch(actions.isUser(true))

		} else {
			//@ts-ignore
			dispatch(stopSubmit('login', { _error: data.messages }))
			if (data.resultCode === 10) {
				authAPI.setCaptcha()
					.then(data => {

						dispatch(actions.setCaptcha(data.url))
					})

			}
		}



	}
}


export const deleteAuth = () => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		authAPI.setdelete()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(actions.loagingUser(null, null, null))
					dispatch(actions.isUser(false))
				}
			})
	}
}





export default reducerAuth;