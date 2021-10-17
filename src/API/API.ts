import axios from 'axios';


const inisialce = axios.create({
	withCredentials:true,
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
	headers:{
		'API-KEY': '14c256ff-a20c-4af4-a2a9-4de7a24a2007'
	}
})


type ContactsType = {
	github: string
	vk:string 
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}

type PhotosType={
	small: string 
	large: string 
}

type UserType = {
	userId: number 
	lookingForAJob: boolean
	lookingForAJobDescription: string 
	fullName: string 
	contacts:ContactsType
	photos:PhotosType
}


export const userAPI = {

	getUser(userId: number){
		return inisialce.get<UserType>(`profile/${userId}`)
		.then(response=> response.data)

	},
	getMyFriends (totalPage: number, pageSize: number){
		return inisialce.get(`users?page=${totalPage}&count=${pageSize}`)
		  	.then(response => response.data)
	},
	setUserStatus (userId: number){
		return inisialce.get(`/profile/status/${userId}`)
			.then(response=> response.data)
	}
	
}



export const followAPI = {
	followUser(userId: number){
		return inisialce.post(`follow/${userId}`)
			.then(response => response.data)
	},
	unFollowUser(userId: number){
		return inisialce.delete(`follow/${userId}`)
			.then(response => response.data)
	}
}

export type SetAuthData = {
	email: string 
	password: string 
	rememberMe: boolean
	captcha?: string 
}

type GetMyInfo = {
	data: {id: number, email: string, login:string}
	resultCode: number
	messages: Array<string>
} 
type setAuthType = {
	resultCode: number
	messages: Array<string>
	data: {userId:number}
}
export const authAPI = {
	getMyInfo (){
		return inisialce.get<GetMyInfo>(`auth/me`)
			.then(response => response.data)
	},
	setAuth(data:SetAuthData){
		
		return inisialce.post<setAuthType>('auth/login', {email:data.email, password:data.password, rememberMe:data.rememberMe, captcha: data.captcha})
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
	updateStatus(status:string){
		
		return inisialce.put('profile/status', {status:status})
			.then(response => response.data)
	},
	updatePhoto (photo: string){
		const formData = new FormData()
		formData.append('image', photo)
		return inisialce.put('profile/photo', formData, {
			headers:{'Content-Type': 'multipart/form-data'}

		}).then(response => response.data)
	},
	saveProfile(data: UserType){
		debugger
		return inisialce.put('profile', {...data})
			.then(response => response.data)
	}
}

export default userAPI