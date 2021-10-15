import {Row, Col, InputGroup, FormControl, Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import LoginNav from './LoginComponent/LoginNav/LoginNav'
import LoginReduxBody from './LoginComponent/LoginBody/LoginBody'  
import { SetAuthData } from '../../../../API/API';


type MapStateToPropsType={
	isAuth: boolean 
	captcha: string | undefined 
}
type MapDispatchToPropsType = {
	setAuth: (FormData: SetAuthData)=> void
	onSubmit: () => any 
}
const MainLogin:React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props)=>{
	const onSubmit = (formData: SetAuthData)=>{
		props.setAuth(formData)
	}
	if (props.isAuth) return <Redirect to='/myprofile'/>
	return ( 
		<Row >
			<LoginNav />
			<LoginReduxBody  onSubmit={onSubmit} captcha={props.captcha} /> 
		</Row>
		)
}

export default MainLogin