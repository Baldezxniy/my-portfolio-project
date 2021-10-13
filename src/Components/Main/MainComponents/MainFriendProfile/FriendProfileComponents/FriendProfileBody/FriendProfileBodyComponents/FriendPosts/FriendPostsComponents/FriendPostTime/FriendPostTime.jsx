import {Col} from 'react-bootstrap'


const FriendPostTime =(props)=>{
	return (
	<Col className='d-flex justify-content-end text-muted friend__post__time'>
		{props.timeAgo} минут назад 
	</Col>
		)
}

export default FriendPostTime