import {FormControl, InputGroup} from 'react-bootstrap'
import React from 'react'


class FormInputPassword extends React.Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props
    return (

		<InputGroup size="sm" className="">
	    	<FormControl onChange={(e) => onChange(e.target.value)}  type={this.props.type} placeholder={this.props.placeholder}aria-label="Small" style={{boxShadow:'none', borderColor:'#000'}}aria-describedby="inputGroup-sizing-sm" />
		</InputGroup>
		)
	}
}
export default FormInputPassword