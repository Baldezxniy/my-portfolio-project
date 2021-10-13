import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Col} from 'react-bootstrap'

const FriendInfoImg =(props)=>{
	return (
	<Col xs='6' md='3'>
		<Image src={props.imge ? props.imge : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiMxpScMGx9h_AuFfjulymvego8LOrItOKw&usqp=CAU'} className='avatar__border' width='100%' height='90%'rounded />
	</Col>
		)
}

export default FriendInfoImg