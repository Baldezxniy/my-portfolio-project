import {Row, Col, InputGroup, FormControl, Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import LoginNav from './LoginComponent/LoginNav/LoginNav.jsx'
import LoginReduxBody from './LoginComponent/LoginBody/LoginBody.jsx'  




const MainLogin = (props)=>{
	const onSubmiteData = (formData)=>{
		props.setAuth(formData)
	}
	if (props.isAuth) return <Redirect to='/myprofile'/>
	return ( 
		<Row >
			<LoginNav />
			<LoginReduxBody captcha={props.captcha}onSubmit={onSubmiteData}/> 
		</Row>
		)
}

export default MainLogin