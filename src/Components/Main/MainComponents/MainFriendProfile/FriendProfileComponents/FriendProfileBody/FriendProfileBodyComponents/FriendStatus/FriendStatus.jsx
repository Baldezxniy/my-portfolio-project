import {Col, Row} from 'react-bootstrap';


const FriendStatus =(props)=>{
	return (
		<Row>
        	<Col xs='12' sm='6' md='3'>
				Статус: {props.status}
			</Col>
		</Row>
		)

}

export default FriendStatus