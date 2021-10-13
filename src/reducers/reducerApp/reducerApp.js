import {getMyInfo} from './../reducerAuth/reducerAuth.js'


const INISIALIZE = 'INISIALIZE';


const inisialState = {
	inisial:false
}


const appReducer = (state = inisialState, action)=>{
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



const inisial = ()=>{
	return {
		type:INISIALIZE
	}
} 


export const inisialSucses = () => (dispatch)=>{

	const promise = dispatch(getMyInfo())
	
	promise.then(()=>{
		dispatch(inisial())
	})
	
}

export default appReducer