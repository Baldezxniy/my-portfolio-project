import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Spinner	} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import MyFriendButton from './MainMyFriendComponents/MyFriendButton/MyFriendButton.jsx'
import MyFriendNav from './MainMyFriendComponents/MyFriendNav/MyFriendNav.jsx'
import MyFriendFriends from './MainMyFriendComponents/MyFriendFriends/MyFriendFriends.jsx'


const MainMyFriend =(props)=>{
	return (
		<Row>
			<MyFriendNav />
			<Col md='10' xs='12' >
			

			<div className='d-flex justify-content-end'>
				{props.totalCoundUser} друзей
			</div>
			<Row>
				<Col className='d-flex justify-content-center'>
				  {props.isFetching ? <Spinner size='sm'animation="border" variant="primary" /> : null}
				</Col>
			</Row>
			
			{ props.myFriends.map(f => <MyFriendFriends  id={f.id} key={f.id} online={f.online} name={f.name} surname={f.surname} imge={f.photos.large} socialFriend={f.socialFriend} lastOnline={f.lastOnline}/>)}
			
			</Col>

		<MyFriendButton totalPage={props.totalPage}setFrienClick={props.setFrienClick}   setTotalPage={props.setTotalPage} totalCoundUser={props.totalCoundUser}pageSize={props.pageSize}totalPage={props.totalPage} myFriends={props.myFriends}setFriend={props.setFriend}/>
		</Row>
		)
}

export default MainMyFriend