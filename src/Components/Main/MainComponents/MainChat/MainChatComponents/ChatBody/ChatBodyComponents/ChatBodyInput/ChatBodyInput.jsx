import {Col, Row, Button} from 'react-bootstrap'
import React, { useState,useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { FormikInput } from '../../../../../MainMyFriend/MainMyFormFormik.jsx';


const ChatBodyInput = (props) => {

	return (
      <Formik
        initialValues={{ mesageText: '' }}
       
        onSubmit={(values, { setSubmitting }) => {
			debugger
			if(!values.mesageText){
				return
			}
        	props.sendMessageUI(values.mesageText)
			values.mesageText = ''
       }}
     >
       {({ isSubmitting }) => (
         <Form className='d-flex'>
          
		   <Field type="text"component={FormikInput} name="mesageText" />
		   <div>
           <Button type="submit" disabled={false} size='sm' variant='dark' >
             send
           </Button>
		   </div>
		 </Form>
       )}
     </Formik>
		
		)
}


export default ChatBodyInput;
