import {userAPI, followAPI} from './../../API/API.js'

const LIKE_POST = "LIKE-POSt"
const UNLIKE_POST = 'UNLIKE-POST'
const FOLLOW_USER ='FOLLOW-USER';
const UNFOLLOW_USER ='UNFOLLOW-USER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS'
const SET_USER = 'SET_USER';
const SET_STATUS = 'SET_STATUS'

const inisialState ={
	users :null,
	post:[
		{
			id:1 , like: true, imge:null , name: null,  surname: null, timeAgo: 10, 
			text: "Это мой первый пост так что давай ставь лайк и будешь молодец"
		},
		{
			id:2 , like: false, imge: null , name: null,  surname: null, timeAgo: 24, 
			text: "Это мой второй пост так что давай ставь лайк и будешь молодец"
		}
	],
	follow:true,
	isFetching: false,
	isFollowProgeress:false,
	status: ''
}

const reducerFiendPage =(state= inisialState, action )=>{
	switch(action.type){
		case TOGGLE_FOLLOW_PROGRESS:{
			return{
				...state,
				isFollowProgeress:action.followInProgres
			}
		}
		case UNFOLLOW_USER:{
			debugger
			return{
				...state, 
					 follow:false
			}
		}
		case FOLLOW_USER:{
			debugger
			return{
				...state, 
					 follow:true
			}
		}
		case LIKE_POST:	{
			return{
				...state, 
				 post:[...state.post.map(p=>{
					if (p.id === action.postId) {
						return {
							...p, like:false
						}
					}else {
						return p
					}
				})]
			}
		}
		case UNLIKE_POST:	{
			return {
				...state, 
				 post:[...state.post.map(p=>{
					if (p.id === action.postId) {
						return {
							...p, like:true
						}

					}else {
					return p	
					}
					
				})]

			}
		}
		case SET_USER : {
			return {
				...state, users: {...action.user}
			}
		}
		case TOGGLE_IS_FETCHING : {
			return {
				...state, 
				isFetching: action.isFetching
			}
		}
		case SET_STATUS:{
			return{
				...state, 
				status: action.status
			}
		}
		default : {
			return state;
		}
}

return state}

// ACTION CREATE 
const setStatus = (status)=>{
	return{
		type: SET_STATUS,
		status
	}
} 

export const setProfileUser = (user)=>{
	return{
		type : SET_USER, 
		user: user
	}
}

export const followUser = (userIdFollow)=>{
	return {type: FOLLOW_USER,
		userId : userIdFollow}
}

export const unFollowUser =(userIdUnfollow)=>{
	return {
		type: UNFOLLOW_USER,
		userId: userIdUnfollow
	}
}
export const likePost =(userIdLikePost, postIdLike)=>{
	return {
		type: LIKE_POST,
		userId: userIdLikePost,
		postId: postIdLike
	}
}

export const unlikePost = (userIdUnlikePost, postIdUnlike)=>{
	return{
		type : UNLIKE_POST,
		userId: userIdUnlikePost,
		postId: postIdUnlike
	}
}

export const isFetchingToggle =(isFetching)=>{
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching:isFetching
	}
}
export const toggleFollowProgress =(followInProgres)=>{
	return {
		type: TOGGLE_FOLLOW_PROGRESS,
		followInProgres
	}
}
// THUNK CREATE
export const getUser = (userId)=>{	
	return async (dispatch)=>{
		dispatch(isFetchingToggle(false))
		const data = await userAPI.getUser(userId)				
		dispatch(setProfileUser(data))
		dispatch(isFetchingToggle(true))
	}
}

export const setUserStatus = (userId)=>{
	return async(dispatch) =>{
		const data = await userAPI.setUserStatus(userId)
		dispatch(setStatus(data))
	}
}

const followUnfolow = async (userId, dispatch, followOrUnfollow, action)=>{
	dispatch(toggleFollowProgress(true))
	const data = await followOrUnfollow(userId)
	if(data.resultCode === 0){
		dispatch(action(userId))
	}
	dispatch(toggleFollowProgress(false))
}

export const setUnFollowUser = (userId)=>{
	return (dispatch)=>{
		followUnfolow(userId, dispatch, followAPI.unFollowUser, unFollowUser)
	}
}

export const setFollowUser = (userId)=>{
	return (dispatch) => {
		followUnfolow(userId, dispatch, followAPI.followUser,followUser )
	}
}

export default reducerFiendPage;