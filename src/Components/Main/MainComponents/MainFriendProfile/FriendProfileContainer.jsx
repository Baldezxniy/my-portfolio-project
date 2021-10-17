import {connect} from 'react-redux';
import FriendContainerRouter from './FriendClassContainer.jsx'
import {followUser, unFollowUser, likePost, unlikePost, setProfileUser, isFetchingToggle, toggleFollowProgress, getUser,setUnFollowUser, setFollowUser,
setUserStatus}
 from './../../../../reducers/reduserFriendPage/reducerFriendPage.js'
import {compose} from 'redux'
import {withAuthRedirect} from './../../../../HOC/hocRedirect.js'




const mapStateToProps = (state)=>{
	return{
		users:state.friendPage.users,
		post:state.friendPage.post,
		isFetching:state.friendPage.isFetching,
		follow:state.friendPage.follow,
		isFollowProgeress: state.friendPage.isFollowProgeress,
		status: state.friendPage.status
	}
}

const FriendContainer = compose(withAuthRedirect, 
													connect(mapStateToProps, {
													setUserStatus,
													unFollowUser,
													followUser,
													likePost,
													unlikePost, 
													setProfileUser,
													isFetchingToggle,
													toggleFollowProgress,
													getUser,
													setUnFollowUser,
													setFollowUser
													}
													 ))(FriendContainerRouter)
export default FriendContainer 