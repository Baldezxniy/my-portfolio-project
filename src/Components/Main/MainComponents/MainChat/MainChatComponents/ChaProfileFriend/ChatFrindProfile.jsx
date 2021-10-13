import 'bootstrap/dist/css/bootstrap.min.css';

import {Col} from 'react-bootstrap'
import FriendName from './FriendProfileComponents/FriendName/FriendName.jsx'
import FriendSuname from './FriendProfileComponents/FriendSurname/FriendSurname.jsx'
import FriendImg from './FriendProfileComponents/FriendImg/FriendImg.jsx'

const ChatFriendProfile = (props)=> {
 	return (
		<Col className='d-flex justify-content-end '>
				<FriendName name={props.chat.name} />
				<FriendSuname surname= {props.chat.surname} />
				<FriendImg imge={props.chat.imge} />
						</Col>
		)
}

export default ChatFriendProfile;