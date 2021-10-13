import {Form, Check} from 'react-bootstrap';
import React from 'react'

class FormCheckboxRememberMe extends React.Component {
  render=()=> {
    const   {
      input: { value, onChange }
    } = this.props

    return (
    <Form.Check type={this.props.type} onClick={(e) => onChange(e)} label="Remember me" />
    	
    )
  }
}
export default FormCheckboxRememberMe