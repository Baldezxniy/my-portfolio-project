import React from 'react'
import MainMyFriend from './MainMyFriend.jsx'

class MainMyFriendClassContainer extends React.Component{
	componentDidMount(){
		this.props.getFriendList(this.props.totalPage, this.props.pageSize)

		
	}
	setFrienClick =	(totalPage)=>{
		this.props.getFriendList(totalPage,this.props.pageSize )
		
		}

	render = ()=>{
		return (
			<MainMyFriend isFetching={this.props.isFetching}setFrienClick={this.setFrienClick}  totalPage={this.props.totalPage} setTotalPage={this.props.setTotalPage} totalCoundUser={this.props.totalCoundUser}pageSize={this.props.pageSize}totalPage={this.props.totalPage} myFriends={this.props.myFriends}setFriend={this.props.setFriend}/>
		


			)
		
	}
}

export default MainMyFriendClassContainer
