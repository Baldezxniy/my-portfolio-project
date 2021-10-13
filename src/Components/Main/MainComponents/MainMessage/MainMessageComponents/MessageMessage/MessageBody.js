import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from 'react-bootstrap';
import MessageImg from './MessageBodyComponent/MessageBodyImg/MessageBodyImg.js'
import Message from './MessageBodyComponent/Message/Message.js';
import MessageTime from './MessageBodyComponent/MessageTime/MessageTime.js'
import {NavLink} from 'react-router-dom'
const MessageBody =(props)=>{
	return(

		<Col md='12' xs='12'>
				<Row >
					<Col sm='12'>
						<NavLink to={"/message/"+ props.id } className='d-block py-2 px-2 message'>
							<Row>
								<Col className='d-flex '>
									<MessageImg imge={props.messageImg}/>
										< Message messageName={props.messageName} messageSurname={props.messageSurname} messageText={props.messageText}/>
										<MessageTime messageTime={props.messageTime}/>	
									</Col>
							</Row>
					  </NavLink>
							
					</Col>
				</Row>

			</Col>	

		)
}

export default MessageBody;