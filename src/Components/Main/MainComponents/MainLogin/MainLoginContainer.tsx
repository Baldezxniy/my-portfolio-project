import MainLogin from './MainLogin'
import {connect} from 'react-redux'
import {setAuth} from '../../../../reducers/reducerAuth/reducerAuth'
import {AppStateType} from './../../../../stateRedux/stateRedux'
import { SetAuthData } from '../../../../API/API.js'


type MapStateToPropsType = {
	isAuth: boolean
	captcha: string | undefined 
}


const mapStateToProps =(state:AppStateType): MapStateToPropsType=>{
	return {
		isAuth: state.AuthUser.isAuth,
		captcha: state.AuthUser.captcha
	}
}

type MapDispatchToPropsType = {
	setAuth: (FormData: SetAuthData)=> void
}
const MainLoginContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {},  AppStateType>(mapStateToProps, {setAuth})(MainLogin)

export default MainLoginContainer