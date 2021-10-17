import {Col, Row, Button} from 'react-bootstrap';
import {reduxForm,Field, InjectedFormProps} from 'redux-form'
import FormInputLogin from './LoginBodyFormComponent/FormInputLogin/FormInputLogin'
import FormCheckboxRememberMe from './LoginBodyFormComponent/FormCheckboxRememberMe/FormCheckboxRememberMe.jsx'
import {required} from '../../../../../../utilits/valuesUtilit.js'
import React from 'react';
import { SetAuthData } from '../../../../../../API/API.js';


type OwnProps = {
	captcha: string | undefined
}


const LoginBody:React.FC<InjectedFormProps<SetAuthData,OwnProps> & OwnProps> =(props)=>{
	 
	return (
			<Col>
				<form onSubmit={props.handleSubmit}>
					<Row>
						<Col sm='6' xs='12' className='my-2'>
							<Field name='email' placeholder='Email ' validate={[required ]} width='w-100' component={FormInputLogin } className='w-100'/>
						</Col>
					</Row>
					<Row>	
						<Col sm='6' xs='12' className='my-2'>
							<Field name='password' placeholder='Password' validate={[required ]} type='password'component={FormInputLogin} 
							
							 className='w-100'/>
							
						</Col>
					</Row>		
					<Row>	
						<Col sm='6' xs='12'>	
							<Row>	
								<Col sm='6' xs='12'  className='d-flex justify-content-center mb-3'>
									<Field component={FormCheckboxRememberMe} type='checkbox' name='rememberMe' />
								</Col>
								{!!props.captcha ? <Col sm='6' xs='12'  className='d-flex justify-content-center mb-3'>
									<img style={{width:'130px'}} src={props.captcha} />
								</Col>: <></>}
								{!!props.captcha ? <Col sm='6' xs='12'  className='d-flex justify-content-center mb-3'>
									<Field name='captcha' placeholder='captcha' validate={[required ]} width='w-100' component={FormInputLogin } className='w-100 d-flex justify-content-center'/>

								</Col> : <></>}
								<Col sm='6' xs='12'  className='d-flex justify-content-center'>

			 				 	  	<Button variant="primary" size='sm' type="submit" className='px-4' style={{boxShadow:'none'}}>
									 	Submit
				 					</Button>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col sm='6' className='d-flex error justify-content-center '>
							{props.error}
						</Col>
					</Row>
				</form>
			</Col>
		)
}



const LoginReduxBody = reduxForm<SetAuthData, OwnProps>({form:'login'})(LoginBody)
export default LoginReduxBody