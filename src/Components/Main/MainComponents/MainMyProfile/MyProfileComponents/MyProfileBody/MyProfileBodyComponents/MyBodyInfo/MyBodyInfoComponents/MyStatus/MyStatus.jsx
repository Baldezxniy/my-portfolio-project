import React, {useState, useEffect} from 'react';
import {Col, Row, InputGroup, FormControl} from 'react-bootstrap'


const MyStatusHookCompomponent =(props)=> {
	
	const [editMode, setEditMode] = useState(false)
	const [status, updateStatus] = useState(props.status)

	useEffect(()=>{
			updateStatus(props.status)
	},[props.status])	
	const updateStatusText = (e)=>{
		updateStatus(e.target.value)
	}


	const activaEditteMode = ()=>{
		setEditMode(true)
	} 
	const deactivateEditMode = ()=>{
		setEditMode(false)
		props.updateMyStatus(status)
	}

	return (

		<Col xs='12'>
			<Row>
				<Col xs='12' sm='6' md='3'>
					{editMode ? 			<InputGroup  >
	    										<FormControl  style={{minWidth:'40px'}}
										      		aria-label="Default" onChange={updateStatusText}  onBlur={deactivateEditMode} value={status}  autoFocus={true}
										      		aria-describedby="inputGroup-sizing-default" style={{boxShadow:'none',borderRadius:'5px', borderColor:'#000'}}/ >
							      
											</InputGroup>:
											
											<span onDoubleClick={activaEditteMode} className='py-2 unselectable'>
												{props.status ? props.status : "no status"}
											</span>}
				</Col>
			</Row>
		 	</Col>
		)
	
}


export default MyStatusHookCompomponent;