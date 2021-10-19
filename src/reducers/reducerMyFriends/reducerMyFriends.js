import {userAPI} from './../../API/API'



const SET_FRIEND = 'SET-FRIEND';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT_USER = 'SET_TOTAL_COUNT_USER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const NEW_TERM = 'reduserMyFriends/NEW_TERM' 

const inisial = {
	myFriends:[	
	],
	pageSize: 10,
	totalCoundUser: 0,
	totalPage: 1,
	isFetching: true,
	term: ''

}
const reducerMyFriends = (state= inisial, action)=>{
	switch(action.type){
		
		case SET_FRIEND: {
			return {
				...state, myFriends: [...action.friends]
			}
		}
		case SET_PAGE:{
			return{
				...state, totalPage:action.newPage
			}
		}
		case SET_TOTAL_COUNT_USER:{
			return {
				...state, totalCoundUser: action.totalUser
			}
		}
		case TOGGLE_IS_FETCHING:{
			return {
				...state, isFetching: action.isFetching
			}
		}
		case NEW_TERM :{
			return {
				...state, 
				term: action.term
			}
		}
		default :
			return state
	}	
	
}


// ACTIO CREATE 


export const setFriend =(friends)=>{
	return {
		type: SET_FRIEND,
		friends
	}
}

export const setTotalPage = (newPage)=>{
	
	return {
		type: SET_PAGE,
		newPage: newPage
	}
}


export const  totalUser =(totalUser)=>{
	return {
		type: SET_TOTAL_COUNT_USER,
		totalUser: totalUser
	}
}
export const toggleIsFetching=(isFetching)=>{
	return {
		type : TOGGLE_IS_FETCHING, 
		isFetching:isFetching
	}
}
const newTerm = (term)=>{
	return {
		type: NEW_TERM,
		term 
	}
}


// THUNK CREATE 

export const getFriendList = (totalPage, pageSize, term )=>{
	
	return async (dispatch)=>{
		dispatch(newTerm(term))
		dispatch(setTotalPage(totalPage))
		dispatch(toggleIsFetching(true))
		const data = await userAPI.getMyFriends(totalPage, pageSize,term )
		dispatch(setFriend(data.items))
		dispatch(toggleIsFetching(false))
		dispatch(totalUser(data.totalCount))
	}
}

export default reducerMyFriends;