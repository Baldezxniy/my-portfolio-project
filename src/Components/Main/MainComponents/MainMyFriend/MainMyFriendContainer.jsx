import MainMyFriendClassContainer from './MainFriendClassContainer.jsx';
import {connect} from 'react-redux';
import {setFriend, totalUser, setTotalPage, toggleIsFetching,getFriendList} from './../../../../reducers/reducerMyFriends/reducerMyFriends.js'
import {getTotalCoundUser, getMyFriendsSuper, getPageSize, getTotalPage, getIsFetching} from './../../../../reselect/myFriendsReselect/myFriendsReselect.js'

const mapStateToProps =(state)=>{
	return {
		totalCoundUser:getTotalCoundUser(state),
		myFriends:getMyFriendsSuper(state),
		pageSize: getPageSize(state), 
		totalPage: getTotalPage(state),
		isFetching: getIsFetching(state)
			}
}

const MainMyFriendContainer = connect(mapStateToProps, {

															setFriend,
															setTotalPage,
															setTotalUser: totalUser,
															toggleIsFetching,
															getFriendList

														})(MainMyFriendClassContainer)


export default MainMyFriendContainer