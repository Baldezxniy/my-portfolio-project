import 'bootstrap/dist/css/bootstrap.min.css';

import {Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
const PostImg = (props)=>{
	return(
		 <div className='d-inline'>
				<NavLink to="/myprofile"><Image src={props.imge}  width='40'roundedCircle  /></NavLink>
			</div>
		)
}

export default PostImg;