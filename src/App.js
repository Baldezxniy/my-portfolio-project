import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner} from 'react-bootstrap';
import HeaderContainer from './Components/Header/HeaderContainer.jsx'
import Main from './Components/Main/Main.js'
import React from 'react'
import {connect} from 'react-redux'
import {inisialSucses} from  './reducers/reducerApp/reducerApp'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom' 



class App extends React.Component {
   componentDidMount = ()=>{
    this.props.inisialSucses()
    }
  render =()=>{
    if (!this.props.inisial) return <div className='full__scrin d-flex justify-content-center align-items-center'><Spinner animation="border" variant="primary" />
</div>
    return (
        <Container >
          <HeaderContainer />
            <Main />
        </Container>
      )

  }
  
}

const mapStateToProps = (state)=>{
  return {
    inisial: state.inisialApp.inisial
  }
}



export default  compose(
                      withRouter,
                      connect(mapStateToProps, {inisialSucses}))(App)