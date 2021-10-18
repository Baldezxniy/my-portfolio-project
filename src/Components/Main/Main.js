import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap'
import './Main.scss'
import React from 'react'
import MainMyProfileContainer from './MainComponents/MainMyProfile/MainMyProfileContainer'
import MainChatContainer from './MainComponents/MainChat/MainChatContainer'
import MainFriendProfileContainer from './MainComponents/MainFriendProfile/FriendProfileContainer'
import MainLoginContainer from './MainComponents/MainLogin/MainLoginContainer'
import {Route ,Switch, Redirect} from 'react-router-dom';
import MainMyFriend from './MainComponents/MainMyFriend/MainMyFriend';
import MyMessage from './MainComponents/MainChat/MainChatComponents/ChatBody/ChatBodyComponents/ChatBodyMessage/ChatBodyMessageComponents/MyMessage/MyMessage';

const MainNewsContainer = React.lazy(()=> import('./MainComponents/MainNews/MainNewsContainer.jsx'));
const MainSetingContainer = React.lazy(()=>import('./MainComponents/MainSeting/MainSetingContainer.jsx'));


const containerSuspense = (Component) => {
	return<React.Suspense fallback={<div className='d-flex justify-content-center'><Spinner size='sm'animation="border" variant="primary" /></div>} >
			<Component />
		  </React.Suspense>		
}


const RedirectProfile = (props)=>{

	return(
		<div className='d-flex justify-content-center'>ERROE 404</div>
		)
}

const Main =(props)=>{
 	return(

		
		<main>
			<Switch>
				 <Route exact path='/' render={()=> <Redirect to='/myprofile'/>}/> 
			 	 <Route  path='/myprofile' render={()=><MainMyProfileContainer />}/>
			     <Route path='/message' exact render={()=> <MyMessage />} />
			     <Route path='/seting' render ={()=> containerSuspense(MainSetingContainer)}/> 
			     <Route path='/message/1' render ={()=><MainChatContainer  />}/>
			     <Route path='/myfriend' render={()=> <MainMyFriend />}/>
			     <Route path='/friendprofile/:userId'  render ={()=> <MainFriendProfileContainer />}/>
			     <Route path ="/news" render={()=> containerSuspense(MainNewsContainer)}/>
			     <Route path='/login' render={()=> <MainLoginContainer />}/>
	   			<Route path='/*' render={()=> <RedirectProfile/>}/>
	   		</Switch>
	   	</main>
    
		)
}

export default Main