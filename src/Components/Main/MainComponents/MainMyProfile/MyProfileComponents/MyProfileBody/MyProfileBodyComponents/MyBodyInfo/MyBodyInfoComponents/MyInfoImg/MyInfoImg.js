import 'bootstrap/dist/css/bootstrap.min.css';
import {Image , Form, Col} from 'react-bootstrap';
import './MyInfoImg.scss'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const Input = styled('input')({
  display: 'none',
});

const MyInfoImg = (props)=>{

	const fileChange = (e)=>{
		if(e.target.files.length){
			props.savePhoto(e.target.files[0])
		}
	}
	return(
		<Col xs='6' md='3'>
        	<Image src={props.imge || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiMxpScMGx9h_AuFfjulymvego8LOrItOKw&usqp=CAU'} height='70px' width='100%'thumbnail />
    		<label htmlFor="contained-button-file" className='my-2'>
		  <Input onChange={fileChange}accept="image/*" id="contained-button-file" multiple type="file" />
		  <Button  variant="contained" component="span">
		    фото
		  </Button>
		</label>
      </Col>
		)
}

export default MyInfoImg;