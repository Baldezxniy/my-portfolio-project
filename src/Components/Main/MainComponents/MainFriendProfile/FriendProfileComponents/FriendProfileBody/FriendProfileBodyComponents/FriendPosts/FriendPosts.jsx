import {Row, Col, Image} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import FriendName from './FriendPostsComponents/FriendPostsName/FriendName.jsx'
import FriendPostText from './FriendPostsComponents/FriendPostText/FriendPostText.jsx'
import FriendPostLike from './FriendPostsComponents/FriendPostLike/FriendPostLike.jsx'
import FriendPostTime from './FriendPostsComponents/FriendPostTime/FriendPostTime.jsx'






const FriendPost =(props)=>{
	
	return (
				<Row>
					<Col>
						<Row className='py-2'>
							<Col className='d-flex w-100' sm='12'>
								<NavLink to='/friendprofile/1' className='d-block'>
								<Image src={props.imge ? props.imge : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiMxpScMGx9h_AuFfjulymvego8LOrItOKw&usqp=CAU'} roundedCircle height='40' width='40'/>
								</NavLink>
								<div className="d-flex flex-column w-100">
								<FriendName surname={props.surname} name={props.name}/>
								<FriendPostText text={props.text}/>
								</div>
								<FriendPostLike like={props.like} likePost={props.likePost} unlikePost={props.unlikePost} idUser={props.idUser} id={props.id}/>
							</Col>
							<FriendPostTime timeAgo={props.timeAgo}  />
						</Row>
						
					</Col>
				</Row>
		)
}

export default FriendPost