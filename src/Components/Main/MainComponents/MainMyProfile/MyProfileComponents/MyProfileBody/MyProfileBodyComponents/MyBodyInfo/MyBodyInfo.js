import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
import './MyBodyInfo.scss'
import MyInfoImg from './MyBodyInfoComponents/MyInfoImg/MyInfoImg.js'
import MyInfoData from './MyBodyInfoComponents/MyInfoData/MyInfoData.js'
import MyStatus from './MyBodyInfoComponents/MyStatus/MyStatus.jsx'


const MyBodyInfo = (props)=>{
	return(
		<Row>
     	<MyInfoImg imge={props.imge} savePhoto={props.savePhoto}/>
      <MyInfoData saveProfile={props.saveProfile}info={props.info}name={props.name}  study={props.study} sity={props.sity}/>
    <MyStatus status={props.status}updateMyStatus={props.updateMyStatus}/>
  	</Row>
		)
}

export default MyBodyInfo;