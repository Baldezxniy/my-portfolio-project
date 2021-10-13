import MainLogin from './MainLogin.jsx'
import {connect} from 'react-redux'
import {setAuth} from './../../../../reducers/reducerAuth/reducerAuth.js'

const mapStateToProps =(state)=>{
	return {
		isAuth: state.AuthUser.isAuth,
		captcha: state.AuthUser.captcha
	}
}

const MainLoginContainer = connect(mapStateToProps, {setAuth})(MainLogin)

export default MainLoginContainer