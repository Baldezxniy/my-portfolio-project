import 'bootstrap/dist/css/bootstrap.min.css';
import { Row} from 'react-bootstrap';
import './MainMyProfile.scss'
import MyProfileNav from './MyProfileComponents/MyProfileNav/MyProfileNav.js'
import MyPrifileBody from './MyProfileComponents/MyProfileBody/MyProfileBody.js'
import {Redirect} from 'react-router-dom'
const MainMyPrifile =(props)=> {

	return(

		<Row> 
          <MyProfileNav />
          <MyPrifileBody saveProfile={props.saveProfile} savePhoto={props.savePhoto}info={props.info} updateMyStatus={props.updateMyStatus}status={props.status} newPostText={props.newPostText} MyPost={props.MyPost} addPost={props.addPost} newTextMyPost={props.newTextMyPost}/>
        </Row>
		)
}


export default MainMyPrifile