import {useState} from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import {reduxForm, Field} from 'redux-form'
import MyInfoCont from './MyInfoComponents/MyInfoCont.jsx';
import Info from './MyInfoComponents/Info.jsx'
import InfoEditForm from './MyInfoComponents/InfoEdit.jsx'


const MyInfo =(props)=>{
	const [view, setView] = useState(false)
	const [editMode, setEditMode]= useState(false)
	const onSubmitForm = (data)=>{
		props.saveProfile(data)
			.then(()=>{
				setEditMode(false)		
			})
	}
	return (
		view ? <div > 
		<Button  variant='secondary' onClick={()=>{setView(false); setEditMode(false)}}size='sm' style={{width:'100px', boxShadow:'none'}}>скрыть</Button>
		{editMode ?
			<InfoEditForm initialValues={props.info} onSubmit={onSubmitForm}{...props}/> :<div>
				<Info {...props} />  
	 			<div className='mx-2'>
				{Object.keys(props.info.contacts).map(key=>{
					return <MyInfoCont key={key} contactsValue={props.info.contacts[key]} contactsTitle={key}/>
				}) }
				</div>
				</div>}
	{ editMode ? <></> :<Button size='sm' className='my-2' onClick={()=> setEditMode(true)}variant='secondary'style={{width:'120px', boxShadow:'none'}}>редактировать</Button>}
	</div>:<Button size='sm' variant='secondary'onClick={() => setView(true)} style={{width:'100px', boxShadow:'none'}}>смотреть</Button>
			
		)
}


export default MyInfo