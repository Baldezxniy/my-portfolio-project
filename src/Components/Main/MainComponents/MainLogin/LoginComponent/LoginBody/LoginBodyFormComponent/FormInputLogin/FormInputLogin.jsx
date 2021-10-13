import {FormControl, InputGroup} from 'react-bootstrap'
import React from 'react'




const FormInputLogin = ({input, meta, ...props})=>{
	  
	const hasEror = meta.touched && meta.error && '2px solid red'
	return (<>
		<div className='d-flex justify-content-center text-danger'>
				{hasEror ? meta.error : <></> }
			</div>

		<InputGroup size="sm" className="">
			<FormControl 
			{...input} {...props}aria-label="Small" style={{boxShadow:'none' , border:hasEror}}aria-describedby="inputGroup-sizing-sm" />
		</InputGroup>
			
		</>
		)
}

export default FormInputLogin