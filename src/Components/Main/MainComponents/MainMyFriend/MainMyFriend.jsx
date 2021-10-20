import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Spinner	, InputGroup, FormControl, Button} from 'react-bootstrap'
import MyFriendButton from './MainMyFriendComponents/MyFriendButton/MyFriendButton.jsx'
import MyFriendNav from './MainMyFriendComponents/MyFriendNav/MyFriendNav.jsx'
import MyFriendFriends from './MainMyFriendComponents/MyFriendFriends/MyFriendFriends.jsx'
import { useDispatch, useSelector } from 'react-redux';
import {getTotalCoundUser, getMyFriendsSuper, getPageSize, getTotalPage, getIsFetching, getTerm} from './../../../../reselect/myFriendsReselect/myFriendsReselect.js'
import { getFriendList} from './../../../../reducers/reducerMyFriends/reducerMyFriends.js'
import { InputFormik } from './MainMyFormFormik.jsx';
import { useHistory } from 'react-router';
import queryString from 'querystring'

const MainMyFriend =(props)=>{

	

	const totalCoundUser = useSelector(getTotalCoundUser)
	const myFriends = useSelector(getMyFriendsSuper)			
	const pageSize = useSelector(getPageSize)
	const totalPage = useSelector(getTotalPage)
	const isFetching = useSelector(getIsFetching)
	const term = useSelector(getTerm)
	const history = useHistory() 

	const query = {}
	if(!!term) query.term = term
	if(totalPage !== 1) query.page = totalPage

	useEffect(()=>{
		history.push({
			pathname: '/myfriend',
			search: queryString.stringify(query)

		})
	}, [term, totalPage] )


	const dispatch = useDispatch() 
	useEffect(()=>{
		const parsed = queryString.parse(history.location.search.substring(1))
		let actionPage = totalPage
		if (!!parsed.page) actionPage = Number(parsed.page) 
		let actionTerm = term 
		if(!!parsed.term) actionTerm = parsed.term 

		dispatch(getFriendList(actionPage, pageSize, actionTerm))
	}, [])



	const setFrienClick = (totalPage)=>{
		
		dispatch(getFriendList(totalPage, pageSize, term))
	}

	return (
		<Row>
			<MyFriendNav />
			<Col md='10' xs='12' >
			
			<InputFormik  pageSize={pageSize} term={term}/>			
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