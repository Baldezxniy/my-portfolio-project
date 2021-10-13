import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import {reduxForm, Field} from 'redux-form'
import FormUpdateText from './MyInputFormComponent/FormUpdateText/FormUpdateText.jsx'
import { required , maxLengthCreate}from './../../../../../../../../utilits/valuesUtilit.js'

 
const maxLength10 =  maxLengthCreate(10)
const MyBodyInput = (props)=>{

	return (
		<Row>
      <form onSubmit={props.handleSubmit}>
      <Col sm='6' md='3' xs='12' className='my-3 d-flex' >

              <Field component={FormUpdateText} name='NewPostText' placeholder={'Напиши пост...'} validate={[ maxLength10]}/> 

               <Button className='px-2'variant="outline-primary" size='sm' type="submit" style={{boxShadow:'none', borderRadius:'0px'}}>
                  send
              </Button>
        </Col> 
      </form>
            
        </Row>
        )
}
const FormBodyinput = reduxForm({form:'addPost'})(MyBodyInput)
export default FormBodyinput