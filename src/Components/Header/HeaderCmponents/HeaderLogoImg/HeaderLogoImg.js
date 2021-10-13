import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderLogoImg.scss'
import {Image, Col} from 'react-bootstrap'

const HeaderLogoImg = (props)=>{
	return(
		<Col xs='6' sm='6' >
			 <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04JJnZqT-37qDufZ_9neNf7uPntwt9IjYLQ&usqp=CAU" roundedCircle height='40'
			 onClick={props.onDeleteProfile}/>
    </Col>
		)
}

export default HeaderLogoImg;