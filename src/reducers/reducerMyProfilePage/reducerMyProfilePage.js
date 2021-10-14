import {myProfileAPI , userAPI} from './../../API/API'
import {getMyInfo} from './../reducerAuth/reducerAuth';
import {stopSubmit} from 'redux-form'




const SET_NEW_PHOTO = 'SET_NEW_PHOTO'
const ADD_POST = 'ADD-POST';
const SET_MY_STATUS = 'SET_MY_STATUS'
const GET_MY_STATUS ='GET_MY_STATUS'
const SET_MY_PROFILE = 'SET_MY_PROFILE' 


const myProfilePage = {

		myInfo:{
			aboutMe: null,
			contacts:{
			facebook: null,
			github: null,
			instagram: null,
			mainLink: null,
			twitter: null,
			vk: null,
			website: null,
			youtube: null,
			},
			fullName: null,
			lookingForAJob: null,
			lookingForAJobDescription: null,
			photos:{
			large: null,
			small: null,
			},
			userId: null,
		},
      myPost:[],
      status:'',
      isMyProfile: false
}



const reducerMyProfilePage = (state = myProfilePage , action)=>{
		
	
	switch (action.type){
		case ADD_POST: {
			return {
				...state,
				myPost:[ ...state.myPost, {id:( state.myPost.length + 1) , name:state.myInfo.fullName, imge:state.myInfo.photos.large, text:action.textPost}],
			};

		}	
		
		case SET_MY_STATUS:{
			return {
				...state, 
				status: action.status 
			}
		}
		case SET_MY_PROFILE:{
			return {
				...state,
				myInfo:action.myData,
				isMyProfile:true
			}
		} 
		case SET_NEW_PHOTO:{
			debugger
			return{
				...state, 
				myInfo:{...state.myInfo,
					photos:{...state.myInfo.photos, large:action.photo}
				}
			}
		}
		
		default:
		return state;	
	}
}

 
// ACTION CREATE

export const addPostActionCreate = (textPost)=>{
  return {type:ADD_POST,textPost}
}



export const setMyStatus = (status)=>{
  return {
    type : SET_MY_STATUS, 
    status
  }
}

const myProfileData =(myData)=>{
	return{
		type:SET_MY_PROFILE,
		myData
	}
}

export const setMyNewPhoto = (photo)=>{
	return {
		type:SET_NEW_PHOTO,
		photo
	}
}


// THUNK CREATE 
export const MyStatus = (myId)=>{
	return async (dispatch) =>{
		const myStatus = await userAPI.setUserStatus(myId)
		dispatch(setMyStatus(myStatus))
		const myProfile = await userAPI.getUser(myId)
		dispatch(myProfileData(myProfile))
			
	}
}

export const updateMyStatus = (status)=>{
	return async (dispatch) =>{		
    try{
    	const data = myProfileAPI.updateStatus(status)
			
			if(data.resultCode === 0){
				dispatch(setMyStatus(status))

			}	
    }catch(error){

    }
    
	}		
}


export const updatePhoto = (photoMain)=> async dispatch=>{
	const data = await myProfileAPI.updatePhoto(photoMain)
	
	if(data.resultCode == 0){
		
		dispatch(setMyNewPhoto(data.data.photos.large))

	}
	
}


export const saveProfile = (dataProfile)=>{
	return async (dispatch, getState)=>{
		
		const myId = getState().AuthUser.login.userId
		const data = await myProfileAPI.saveProfile(dataProfile)
		
		if(data.resultCode === 0){
			
			
			const myProfile = await userAPI.getUser(myId)
			
			dispatch(myProfileData(myProfile))
		}else {
			
			console.log(data.messages)
			dispatch(stopSubmit('profileEdit', {_error:data.messages[0]}))
			return Promise.reject(data.messages[0])
		}
	}
}

export default reducerMyProfilePage;