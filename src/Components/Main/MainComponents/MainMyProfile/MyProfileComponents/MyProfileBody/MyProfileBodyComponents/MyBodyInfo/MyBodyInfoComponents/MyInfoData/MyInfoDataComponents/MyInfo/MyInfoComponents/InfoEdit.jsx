import {Field, reduxForm} from 'redux-form'
import {FormControl, InputGroup, Button, Form} from 'react-bootstrap'
import React from 'react'
import MyInfoCont from './MyInfoCont.jsx';

const InfoEditMode = (props)=>{

	return (

		<form onSubmit={props.handleSubmit} className='mt-2'>
			<div style={{fontSize:'15px', color:'red'}}>
				{props.error ? props.error : ''}
			</div>

			<div className='my-1'>
				<Field validate={[]} placeholder='full name'component={FormInput} name='fullName'/>
			</div>
			<div className='my-1'>
				<Field placeholder='about me' validate={[]} component={FormInput} name='aboutMe'/>			
			</div>
			<div className='my-1'>
				<Field validate={[]}component={FormCheckbox} type='checkbox'name='lookingForAJob'/>
			</div>
			<div className='my-1'>
				<Field validate={[]} placeholder="пошел ты нахуй"component={FormInput}  name='lookingForAJobDescription'/>

			</div>

			<div>
				{Object.keys(props.info.contacts).map(key=>{ 
					
					return <div className='my-1'><Field component={FormInput} key={key} placeholder={key}name={`contacts.`+key} />
					</div>
				})}
			</div>

				<Button type='submit'size='sm' className='my-2' variant='secondary'style={{width:'120px', boxShadow:'none'}}>сохранить</Button>
			

		</form>


		)
}

const FormCheckbox =({input, meta, ...props})=>{

    return (
	    <Form.Check {...input}{...props} type={props.type}label="looking for a job" />
    )
}

const FormInput = ({input, meta, ...props})=>{
	  
	return (<>

		<InputGroup size="sm" className="">
			<FormControl 
			{...input} {...props}aria-label="Small" style={{boxShadow:'none' }}aria-describedby="inputGroup-sizing-sm" />
		</InputGroup>
			
		</>
		)
}

const InfoEditForm = reduxForm({form:'profileEdit'})(InfoEditMode)

export default InfoEditForm