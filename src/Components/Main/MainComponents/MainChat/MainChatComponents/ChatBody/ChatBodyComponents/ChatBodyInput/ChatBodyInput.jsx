import {Col, Row, Button} from 'react-bootstrap'
import React, { useState,useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { FormikInput } from '../../../../../MainMyFriend/MainMyFormFormik.jsx';


const ChatBodyInput = (props) => {
	const [readyStatus, setReadyStatus] = useState(true)

	useEffect(()=>{
		if(!props.ws) return
		const readyStatusHandler =() =>{
			setReadyStatus(false)
		}
		props.ws.addEventListener('open', readyStatusHandler)
		return ()=>{
			props.ws.removeEventListener('open', readyStatusHandler)
		}
	}, [props.ws])

	return (
      <Formik
        initialValues={{ mesageText: '' }}
       
        onSubmit={(values, { setSubmitting }) => {
			if(!values.mesageText){
				return
			}
        	props.ws.send(values.mesageText)
			values.mesageText = ''
       }}
     >
       {({ isSubmitting }) => (
         <Form className='d-flex'>
          
		   <Field type="text"component={FormikInput} name="mesageText" />
		   <div>
           <Button type="submit" disabled={readyStatus} size='sm' variant='dark' >
             send
           </Button>
		   </div>
		 </Form>
       )}
     </Formik>
		
		)
}


export default ChatBodyInput;
