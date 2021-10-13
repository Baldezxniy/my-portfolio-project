import 'bootstrap/dist/css/bootstrap.min.css';

import Name from './PostNameComponents/Name/Name.js'
import Surname from './PostNameComponents/Surname/Surname.js'
const PostName =(props) =>{
	return(
		<div className='d-flex mx-2 justify-self-start post__name text-muted'>
      <Name name={props.name}/>
      <Surname surname={props.surname}/>
    </div>
		)
}

export default PostName;