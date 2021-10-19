import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Spinner	, InputGroup, FormControl, Button} from 'react-bootstrap'
import MyFriendButton from './MainMyFriendComponents/MyFriendButton/MyFriendButton.jsx'
import MyFriendNav from './MainMyFriendComponents/MyFriendNav/MyFriendNav.jsx'
import MyFriendFriends from './MainMyFriendComponents/MyFriendFriends/MyFriendFriends.jsx'
import { useDispatch, useSelector } from 'react-redux';
import {getTotalCoundUser, getMyFriendsSuper, getPageSize, getTotalPage, getIsFetching, getTerm} from './../../../../reselect/myFriendsReselect/myFriendsReselect.js'
import { getFriendList} from './../../../../reducers/reducerMyFriends/reducerMyFriends.js'
import { Formik, Form, Field } from 'formik';
import { InputFormik } from './MainMyFormFormik.jsx';


const MainMyFriend =(props)=>{

	

	const totalCoundUser = useSelector(getTotalCoundUser)
	const myFriends = useSelector(getMyFriendsSuper)			
	const pageSize = useSelector(getPageSize)
	const totalPage = useSelector(getTotalPage)
	const isFetching = useSelector(getIsFetching)
	const term = useSelector(getTerm)
	
	const dispatch = useDispatch() 
	useEffect(()=>{
		dispatch(getFriendList(totalPage, pageSize, term))
	}, [])

	const setFrienClick = (totalPage)=>{
		dispatch(getFriendList(totalPage, pageSize, term))
	}

	return (
		<Row>
			<MyFriendNav />
			<Col md='10' xs='12' >
			
			<InputFormik  pageSize={pageSize}/>			
			<div className='d-flex justify-content-end'>
				{totalCoundUser} друзей
			</div>
			<Row>
				<Col className='d-flex justify-content-center'>
				  {isFetching ? <Spinner size='sm'animation="border" variant="primary" /> : null}
				</Col>
			</Row>
			
			{myFriends.map(f => <MyFriendFriends  id={f.id} key={f.id} online={f.online} name={f.name}
				 surname={f.surname} imge={f.photos.large} socialFriend={f.socialFriend} lastOnline={f.lastOnline}/>)}
			
			</Col>

		<MyFriendButton totalPage={totalPage}setFrienClick={setFrienClick}  
		 		totalCoundUser={ totalCoundUser}pageSize={ pageSize}totalPage={totalPage} />
		</Row>
		)
}

export default MainMyFriend