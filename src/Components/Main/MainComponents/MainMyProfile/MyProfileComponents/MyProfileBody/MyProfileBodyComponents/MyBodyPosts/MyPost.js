import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image} from 'react-bootstrap';
import PostImg from './MyPostComponents/PostImg/PostImg.js'
import PostName from './MyPostComponents/PostName/PostName.js'
import PostText from './MyPostComponents/PostText/PostText.js'
import React from 'react'

const MyPosts = React.memo((props)=>{
  console.log('RENDER')
	return(
		<Row sm='12' xs='12'>
     
        <Col >
          <Row className='py-2 w-100' >
            <Col sm='12' className='d-flex w-100  '>
              <PostImg imge={props.imge}/>
              <div className='d-flex flex-column w-100'>
                <PostName  name={props.name} surname={props.surname} />

              <div clasName='d-flex'>
                <PostText className='w-100 ' text={props.text}/>
               <div className=' text-muted d-flex justify-content-end align-self-end   post__time'> 
                  10:10
               </div>
              </div>
              
            

              </div>
          </Col>
          </Row>
        </Col>
      </Row>
		)
})

export default MyPosts;