import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';

const FriendsImge =(props)=>{
	return (
		<div  className={props.online ? 'friend__active' : ''} >
			<Image src={props.imge ? props.imge : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiMxpScMGx9h_AuFfjulymvego8LOrItOKw&usqp=CAU'} height='40' width='40'roundedCircle  />
		</div>	
		)
}

export default FriendsImge;