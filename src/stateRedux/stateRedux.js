import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducerChatProfileMessage from './../reducers/reducerChatProfileMessage/reducerChatProfileMessage.tsx';
import reducerMyProfilePage from './../reducers/reducerMyProfilePage/reducerMyProfilePage.js';
import reducerMessageData from './../reducers/reducerMessageData/reducerMessageData.js';
import reducerMyFriends from './../reducers/reducerMyFriends/reducerMyFriends.js' ;
import reducerFriendPage from './../reducers/reduserFriendPage/reducerFriendPage.js';
import reducerAuth from './../reducers/reducerAuth/reducerAuth.js';
import appReducer from './../reducers/reducerApp/reducerApp.js'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'



const reducers = combineReducers({
	messageData: reducerMessageData,
	chatProfileMessage: reducerChatProfileMessage,
	myProfilePage: reducerMyProfilePage,
	myfriendsPage:reducerMyFriends,
	friendPage: reducerFriendPage,
	AuthUser: reducerAuth,
	inisialApp: appReducer,
	form:formReducer

});

//type reducerType = typeof reducers
//export type AppState = ReturnType<reducerType>
//Таким способом мы имеем доступ к типу нашего стора и после этого в mapStateToProps в прием функции писать (state: AppState)

//const store = createStore(redusers, applyMiddleware(thunkMiddleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

window._store_ = store;
export default store;