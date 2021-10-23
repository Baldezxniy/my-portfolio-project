import { Col, Row, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { FormikInput } from '../../../../../MainMyFriend/MainMyFormFormik.jsx';
import { useSelector } from 'react-redux';


const ChatBodyInput = (props) => {
  const statusChange = useSelector(state => state.chatMessage.statusChange)
  return (
    <Formik
      initialValues={{ mesageText: '' }}

      onSubmit={(values, { setSubmitting }) => {

        if (!values.mesageText) {
          return
        }
        props.sendMessageUI(values.mesageText)
        props.setIsAutoScroll(true)
        values.mesageText = ''
      }}
    >
      {({ isSubmitting }) => (
        <Form className='d-flex'>

          <Field type="text" component={FormikInput} name="mesageText" />
          <div>
            <Button type="submit" disabled={statusChange} size='sm' variant='dark' >
              send
            </Button>
          </div>
        </Form>
      )}
    </Formik>

  )
}


export default ChatBodyInput;
