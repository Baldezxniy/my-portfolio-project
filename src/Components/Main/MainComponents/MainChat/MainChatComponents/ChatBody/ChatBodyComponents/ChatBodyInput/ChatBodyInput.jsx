import {Col, Row, Button} from 'react-bootstrap'
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import FormChatInput from './FormChatInputComponets/FormChatInput.jsx'


const ChatBodyInput = (props) => {
	debugger
	return (
      <form onSubmit={props.handleSubmit}>
		<Row>
		<Col className='d-flex '>
			
			<Field component={FormChatInput} name='chatMessageText' placeholder='Написать сообщение...'/>
		  	<Button className='px-2'variant="outline-primary" size='sm' type="submit" style={{boxShadow:'none', borderRadius:'0px'}}>
                    send
              </Button>
		</Col>
		</Row>
		</form>
		
		)
}

const FormChatBodyInput = reduxForm({form:'chatInput'})(ChatBodyInput)


export default FormChatBodyInput;
