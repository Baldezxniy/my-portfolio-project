import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Image } from 'react-bootstrap';
import MyName from './MyInfoDataComponents/MyDataName/MyName.js';
import Study from './MyInfoDataComponents/MyDataStudy/Study.js';
import Adres from './MyInfoDataComponents/MyDataAdres/MyAdres.js';
import MyInfo from './MyInfoDataComponents/MyInfo/MyInfo.jsx';


const MyInfoData =(props)=>{
	return(
	<Col xs='6'>
		<MyName name={props.name}/>
    <Study study={props.study ? props.study : 'НУХТ' }/>
    <Adres sity={props.sity ? props.sity : 'Винница'}/>
    
    <MyInfo saveProfile={props.saveProfile} info={props.info}/>
   
   </Col>
   
   )
}

export default MyInfoData;