import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap'


const FriendImg =(props)=>{
	return (
		<div className='d-inline'>
				<Image src={props.imge} height='30' width='30' roundedCircle />
		</div>
		)
}

export default FriendImg;