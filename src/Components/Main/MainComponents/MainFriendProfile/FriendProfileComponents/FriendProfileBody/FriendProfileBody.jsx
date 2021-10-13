import 'bootstrap/dist/css/bootstrap.min.css';

import {Row, Col,Spinner, Image, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import FriendBodyInfo from './FriendProfileBodyComponents/FriendBodyInfo/FriendBodyInfo.jsx'
import FriendBtn from './FriendProfileBodyComponents/FriendBtn/FriendBtn.jsx'
import FriendPost from './FriendProfileBodyComponents/FriendPosts/FriendPosts.jsx'
import FriendStatus from './FriendProfileBodyComponents/FriendStatus/FriendStatus.jsx'


const FriendProfileBody =(props)=>{
		
	
		
	return (

			<Col md='10' xs='12'>
				<FriendBodyInfo name={props.users.fullName} surname={props.users.surname} imge={props.users.photos.large} key={props.users.id} id={props.users.id} city={props.users.city} universal={props.users.universal}/>
				<FriendStatus status={props.status} />
				<FriendBtn status={props.status}isFollowProgeress={props.isFollowProgeress}myFriends={props.myFriends} follow={props.follow} idUser={props.idUser}users={props.users} followClick={props.followClick} unFollowClick={props.unFollowClick}/>
				<Row>
					<Col sm='12' xs='12' className='d-flex justify-content-center'>
						Посты
					</Col>
				</Row>	
				{props.post.map( p=> <FriendPost name={props.users.fullName} imge={props.users.photos.large} text={p.text}surname={p.surname} key={p.id} idUser={props.users.id} timeAgo={p.timeAgo} like={p.like} id={p.id} likePost={props.likePost} unlikePost={props.unlikePost}/>)}
				<Row>
					<Col className='d-flex justify-content-center'>
						<Button size='sm' variant='secondary'className='px-3 mb-2' style={{boxShadow:'none'}} >
						ещё
					</Button>
					</Col>
				</Row>
			</Col>
		)
}


export default FriendProfileBody;