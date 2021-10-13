import {Row, Col, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const MyNewsBtn =(props)=>{
	return (
	<Row>
        <Col xs='12' sm='6' md='3' className='mt-2'>
                  <NavLink to="/news" className='friend__no-style d-grid text__none gap-2'>

          <Button variant="secondary" style={{boxShadow:'none'}}>Новости</Button>
                     </NavLink>

          </Col>
    </Row>
		)
}

export default MyNewsBtn;