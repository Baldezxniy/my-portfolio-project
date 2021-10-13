import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Row, Col} from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
const MyBtnSeting = (props) =>{
	return(
			<Row>
        <Col xs='12' sm='6' md='3'>
          <NavLink className="d-grid text__none gap-2 mt-2"to='/seting'><Button variant="secondary" style={{boxShadow:'none'}}>Настройки</Button></NavLink>
        </Col>
      </Row>
		)
}

export default MyBtnSeting