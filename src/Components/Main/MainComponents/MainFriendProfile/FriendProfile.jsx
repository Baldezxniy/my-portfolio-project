import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Image, Button,Spinner} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import FriendProfileNav from './FriendProfileComponents/FriendProfileNav/FriendProfileNav.jsx' 
import FriendProfileBody from './FriendProfileComponents/FriendProfileBody/FriendProfileBody.jsx'
const MainFriendProfile =(props)=>{
	
		return(
		<Row>
			<FriendProfileNav />
			{props.isFetching ?<FriendProfileBody status={props.status} follow={props.follow} idUser={props.idUser} isFollowProgeress={props.isFollowProgeress}myFriends={props.myFriends}users={props.users} isFetching={props.isFetching}post={props.post}followClick={props.followClick} unFollowClick={props.unFollowClick}likePost={props.likePost} unlikePost={props.unlikePost}/>: <Row>
				<Col className='d-flex justify-content-center'>
					<Spinner size='sm'animation="border" variant="primary" />
				</Col>
			</Row>  }
			
		</Row>
		)
	
	
}

export default MainFriendProfile