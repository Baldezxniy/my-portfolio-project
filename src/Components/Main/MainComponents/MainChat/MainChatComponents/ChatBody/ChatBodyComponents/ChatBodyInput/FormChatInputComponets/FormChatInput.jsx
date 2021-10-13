import React from 'react'
import {InputGroup, FormControl } from 'react-bootstrap'

class FormChatInput extends React.Component {
  render=()=> {
    const   {
      input: { value, onChange }
    } = this.props

    return (
    <InputGroup size="sm" className="">
      <FormControl style={{minWidth:'40px'}}
		      aria-label="Default" onChange={(e) => onChange(e.target.value)}
		      aria-describedby="inputGroup-sizing-default" style={{boxShadow:'none',borderRadius:'0'}}/ >
    </InputGroup>
    )
  }
}
export default FormChatInput