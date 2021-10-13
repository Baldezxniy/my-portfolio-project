import 'bootstrap/dist/css/bootstrap.min.css';

import {Row} from 'react-bootstrap'
import HeaderLogoImg from './HeaderCmponents/HeaderLogoImg/HeaderLogoImg.js';
import HeaderLogotext from './HeaderCmponents/HeaderLogoText/HeaderLogoText.js'

const Header =(props)=>{
  
	return (
		<header>
        <Row className='my-3'>
          <HeaderLogoImg onDeleteProfile={props.onDeleteProfile}/>
          <HeaderLogotext isAuth={props.isAuth} login={props.login}/>
        </Row>
      </header>
		)
}


export default Header