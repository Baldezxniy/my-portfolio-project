import { InputGroup, FormControl} from 'react-bootstrap'
import React from 'react'


const FormUpdateText = ({input, meta, ...props})=>{
  
  const hesError = meta.touched && meta.error && "2px solid red" 
  return (
    <>
   <InputGroup>


      <FormControl
                aria-label="Default" {...props} {...input} 
                aria-describedby="inputGroup-sizing-default" style={{boxShadow:'none',borderRadius:'0', border : hesError}} / >
    </InputGroup>
    </>

  )
}
export default FormUpdateText   