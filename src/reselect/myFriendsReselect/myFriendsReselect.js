import {createSelector} from 'reselect'


export const getMyFriends =(state)=>{
	return state.myfriendsPage.myFriends
}
// Reselect selector 
export const getMyFriendsSuper = createSelector(getMyFriends, (user)=>{
	return user.filter(u => true)
})

export const getTotalCoundUser =(state)=>{
	return state.myfriendsPage.totalCoundUser
}



export const getPageSize =(state)=>{

	return state.myfriendsPage.pageSize
}

export const getTotalPage =(state)=>{

	return state.myfriendsPage.totalPage
}

export const getIsFetching =(state)=>{
	return state.myfriendsPage.isFetching
}

export const getTerm =(state)=>{
	return state.myfriendsPage.term
}