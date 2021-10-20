import React, {useSelector} from 'react'
import {Row, Col, Spinner	, InputGroup, FormControl, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { getFriendList} from './../../../../reducers/reducerMyFriends/reducerMyFriends.js'
import { Formik, Form, Field } from 'formik';
import {getTerm } from './../../../../reselect/myFriendsReselect/myFriendsReselect.js'


export const InputFormik = (props)=>{
	const dispatch = useDispatch();
  
	return (
		<Formik
      enableReinitialize
       initialValues={{ term: props.term}}
       onSubmit={(values, { setSubmitting }) => {
		  	dispatch(getFriendList(1, props.pageSize, values.term))

           setSubmitting(false);
        
       }
	}
     >
       {({ isSubmitting }) => (
         <Form className='d-flex'>
           <Field type="text" name="term" placeholder='поиск' component={FormikInput}/>
		   <div>	
           <Button size='sm'type="submit" disabled={isSubmitting} style={{borderRadius:'0px', boxShadow:'none'}}>
             serch
           </Button>
		   </div>
         </Form>
       )}
     </Formik>
	)
}

const FormikInput = ({
		field,
   		form: { touched, errors },
   		...props}) => {
			   return(
   <div className='w-100'>
	 <InputGroup size="sm" type='text 'className="mb-3" >
    	<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" {...field} {...props}style={{borderRadius:'0px', boxShadow:'none'}}/>
  </InputGroup>
   </div>
 );
	
}
