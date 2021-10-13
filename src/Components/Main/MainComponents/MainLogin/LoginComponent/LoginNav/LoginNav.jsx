import {Col, Row} from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import React from 'react'

const LoginNav = (props)=>{
	return (
		<Col md='2' xs='12'>
				<Row>
					<Col md='12' xs='12' className='d-flex justify-content-center my-3'>
						Login
					</Col>
				</Row>
			</Col>
		)
}

export default LoginNav