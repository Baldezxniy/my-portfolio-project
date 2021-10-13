import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';

const MessageImg =(props)=>{
	return (
		<div className="message__imge">
	    	<Image src={props.imge} roundedCircle height='45' width='45' />
		</div>
		)
}

export default MessageImg;