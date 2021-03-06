import {connect} from 'react-redux';
import HeaderClassContainer from './HeaderClassContainer.jsx'
import { actions} from './../../reducers/reducerAuth/reducerAuth'

const mapStateToProps =(state)=>{
	
	return {

		isAuth: state.AuthUser.isAuth,
		login: state.AuthUser.login.login
	}
}

const {loagingUser, deleteAuth} = actions

const HeaderContainer = connect(mapStateToProps, { loagingUser,  deleteAuth})(HeaderClassContainer)
export default HeaderContainer