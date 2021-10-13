import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button} from 'react-bootstrap';
import './MyProfileBody.scss'
import MyBodyInfo from './MyProfileBodyComponents/MyBodyInfo/MyBodyInfo.js'
import MyBtnSeting from './MyProfileBodyComponents/MyBodyBtnSeting/BtnSeting.js'
import MyPosts from './MyProfileBodyComponents/MyBodyPosts/MyPost.js'
import React from 'react'
import MyBodyFriend from './MyProfileBodyComponents/MyBodyFriend/MyBodyFriend.jsx'
import FormBodyinput from './MyProfileBodyComponents/MyBodyInput/MyBodyInput.jsx'
import {NavLink} from 'react-router-dom'
import MyNewsBtn from './MyProfileBodyComponents/MyNewsBtn/MyNewsBtn.jsx'


const MyPrifileBody =(props)=>{
   

    const posts = [...props.MyPost].reverse().map(p => <MyPosts key={p.id} name={p.name} surname={p.surname} text={p.text} imge={p.imge}/>)

    const onSubmiteAddPost =(data)=>{
      props.addPost(data.NewPostText)

      
    }
  
 	return(
		<Col xs='12' md='10'>
        <MyBodyInfo saveProfile={props.saveProfile}savePhoto={props.savePhoto}updateMyStatus={props.updateMyStatus} status={props.status} info={props.info} imge={props.info.photos.large} key='1' name={props.info.fullName} study={props.info.study} sity={props.info.sity}/>
        <MyBtnSeting />
        <MyBodyFriend />
        <MyNewsBtn />     
        <FormBodyinput onSubmit={onSubmiteAddPost}/>    
         <Row>
      <Col sm='12' className='mb-1'>
          Посты
      </Col>
        {posts}   
      </Row>      
		</Col>
		)
}

export default MyPrifileBody;