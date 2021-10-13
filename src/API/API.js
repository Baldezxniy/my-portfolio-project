import * as axios from 'axios';


const inisialce = axios.create({
	withCredentials:true,
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
	headers:{
		'API-KEY': '14c256ff-a20c-4af4-a2a9-4de7a24a2007'
	}
})


export const userAPI = {

	getUser(userId){
		return inisialce.get(`profile/${userId}`,)
		.then(response=> response.data)

	},
	getMyFriends (totalPage, pageSize){
		return inisialce.get(`users?page=${totalPage}&count=${pageSize}`)
		  	.then(response => response.data)
	},
	setUserStatus (userId){
		return inisialce.get(`/profile/status/${userId}`)
			.then(response=> response.data)
	}
	
}



export const followAPI = {
	followUser(userId){
		return inisialce.post(`follow/${userId}`)
			.then(response => response.data)
	},
	unFollowUser(userId){
		return inisialce.delete(`follow/${userId}`)
			.then(response => response.data)
	}
}


export const authAPI = {
	getMyInfo (){
		return inisialce.get(`auth/me`)
			.then(response => response.data)
	},
	setAuth(data){
		
		return inisialce.post('auth/login', {email:data.login, password:data.password, rememberMe:data.rememberMe, captcha: data.captcha})
			.then(response => response.data)

	},
	setdelete (){
		return inisialce.delete('auth/login')
			.then(response => response.data)
	},
	setCaptcha(){
		return inisialce.get('/security/get-captcha-url')
			.then(response=> response.data)
	}
}


export const myProfileAPI ={
	updateStatus(status){
		
		return inisialce.put('profile/status', {status:status})
			.then(response => response.data)
	},
	updatePhoto (photo){
		const formData = new FormData()
		formData.append('image', photo)
		return inisialce.put('profile/photo', formData, {
			'Content-Type': 'multipart/form-data'

		}).then(response => response.data)
	},
	saveProfile(data){
		debugger
		return inisialce.put('profile', {...data})
			.then(response => response.data)
	}
}

export default userAPI