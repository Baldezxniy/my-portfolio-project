import MyBodyInput from './MyBodyInput.jsx'

import {addPostActionCreate} from './../../../../../../../../reducers/reducerMyProfilePage/reducerMyProfilePage.js';


const MyBodyInputContainer = (props)=>{


  	const onAddMyPost = ()=>{
    	if (props.newPostText== ""){

    }else {
    	props.store.dispatch(addPostActionCreate())
     }
  	}





	return (
		<MyBodyInput newPostText={props.newPostText} addPost={onAddMyPost}/>
        )
}

export default MyBodyInputContainer