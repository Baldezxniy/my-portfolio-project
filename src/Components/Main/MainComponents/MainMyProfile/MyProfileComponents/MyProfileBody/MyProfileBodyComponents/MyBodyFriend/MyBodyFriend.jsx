import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Image, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const MyBodyFriend = (props)=>{
	return (
	<Row className='mt-2'>
        <Col xs='12' sm='6' md='3'>

          <NavLink className="d-grid  text__none gap-2"to='/myfriend'><Button variant="secondary" style={{boxShadow:'none', }}>Друзья</Button></NavLink>

			
        </Col>

        
        
    	</Row>
		)
}

export default MyBodyFriend