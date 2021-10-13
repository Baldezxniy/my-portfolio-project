import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {Col, Row, Image} from 'react-bootstrap'
import FriendsImge from './FriendsComponents/FriendsImge/FriendsImge.jsx'

import FriendsName from './FriendsComponents/FriendsName/FriendsName.jsx'
const MyFriendFriends = (props)=>{
	return (
			
				<Row className='w-100  py-2 friend__profile_hover'>
				<NavLink to={`/friendprofile/${props.id}`} className=' w-100 friend__no-style'>

					<div sm='12' md='12' className='d-flex w-100 '>
						<FriendsImge imge={props.imge} online={props.online}/>
						<div className="d-flex flex-column w-100">
							<FriendsName name={props.name} surname={props.surname} />
						<div className='text-muted friend__friend mx-1 w-100'>
							общих д. {props.socialFriend ?  props.socialFriend : Math.round(Math.random() * 100)}
						</div>
						</div>
						<div className="w-100 justify-content-end d-flex friend__time">
						{props.online ? "в сети" : `${Math.round(Math.random() * 60)} м. назад`}
						</div>
					</div>
				</NavLink>
			</Row>

		
		)
}

export default MyFriendFriends;