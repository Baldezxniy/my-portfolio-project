import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';
import MessageNav from './MainMessageComponents/MessageNav/MessageNav.js'
import MessageBody from './MainMessageComponents/MessageMessage/MessageBody.js'
import React,{useSelector} from 'react'

const MainMessage =()=> {

	const message = useSelector(state => state.messageData)

	return(
		<Row >
			<MessageNav />
			<Col md='10' xs='12' >
			{message.map((m) => <MessageBody key={m.id} id={m.id} messageImg={m.img} messageName={m.name} messageSurname={m.surname} messageText={m.text} messageTime={m.time}/>)}
			</Col>
		</Row>
		)
}

export default MainMessage;