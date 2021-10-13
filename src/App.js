import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner} from 'react-bootstrap';
import HeaderContainer from './Components/Header/HeaderContainer.jsx'
import Main from './Components/Main/Main.js'
import React from 'react'
import {connect} from 'react-redux'
import {inisialSucses} from  './reducers/reducerApp/reducerApp.js'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom' 
import { BrowserRouter } from 'react-router-dom';
import store from './stateRedux/stateRedux.js'
import {Provider} from 'react-redux'


class App extends React.Component {
   componentDidMount = ()=>{
    this.props.inisialSucses()
    }
  render =()=>{
    if (!this.props.inisial) return <div className='full__scrin d-flex justify-content-center align-items-center'><Spinner animation="border" variant="primary" />
</div>
    return (
        <Container className='full__scrin'>
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



const AppMain = compose(
  withRouter,
  connect(mapStateToProps, {inisialSucses}))(App);



const AppProg = (props)=>{
  return (
   <BrowserRouter>
    <Provider store={store}>
    <AppMain />
    </Provider>
    </BrowserRouter>
    )
}

export default AppProg