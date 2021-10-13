import React from 'react';
	import MainFriendProfile from './FriendProfile.jsx'
	import * as axios from 'axios';
	import {withRouter} from 'react-router-dom'
	import userAPI from './../../../../API/API.js'
import {withAuthRedirect} from './../../../../HOC/hocRedirect.js'


	
class FriendClassContainer extends React.Component {
	componentDidMount (){
		
		this.props.getUser(this.props.match.params.userId)
		this.props.setUserStatus(this.props.match.params.userId)
	}
	followClick =()=>{
		this.props.setFollowUser(this.props.users.userId)
		}
	unFollowClick =()=>{
		this.props.setUnFollowUser(this.props.users.userId)

	}
	render =()=>{

		return (
			<MainFriendProfile {...this.props} idUser={this.props.match.params.userId} isFetching={this.props.isFetching} followClick={this.followClick} unFollowClick={this.unFollowClick}/>

			)
	}

}	 

const FriendContainerRouter = withRouter(FriendClassContainer)
export default FriendContainerRouter