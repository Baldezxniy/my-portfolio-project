import {connect} from 'react-redux';
import HeaderClassContainer from './HeaderClassContainer.jsx'
import { loagingUser,  deleteAuth} from './../../reducers/reducerAuth/reducerAuth.js'

const mapStateToProps =(state)=>{
	
	return {

		isAuth: state.AuthUser.isAuth,
		login: state.AuthUser.login.login
	}
}



const HeaderContainer = connect(mapStateToProps, { loagingUser,  deleteAuth})(HeaderClassContainer)
export default HeaderContainer