import MainMyProfileClassContainer from './MainMyProfileClassContainer.jsx';
import {connect} from 'react-redux'
import {addPostActionCreate, updateMyStatus, MyStatus, updatePhoto, saveProfile} from './../../../../reducers/reducerMyProfilePage/reducerMyProfilePage.js'
import {withAuthRedirect} from './../../../../HOC/hocRedirect.js'
import {compose} from 'redux'


const mapStateToProps=(state)=>{
	
	return {
		info:state.myProfilePage.myInfo, 
		newPostText: state.myProfilePage.newPostText,
		MyPost: state.myProfilePage.myPost,
		myId: state.AuthUser.login.userId,
		status: state.myProfilePage.status,
		isMyProfile:state.myProfilePage.isMyProfile
	}
}

const MainMyProfileContainer = compose(
	connect(mapStateToProps, {addPost:addPostActionCreate, updateMyStatus, MyStatus,saveProfile,  updatePhoto}),
	withAuthRedirect
	)(MainMyProfileClassContainer)

export default MainMyProfileContainer