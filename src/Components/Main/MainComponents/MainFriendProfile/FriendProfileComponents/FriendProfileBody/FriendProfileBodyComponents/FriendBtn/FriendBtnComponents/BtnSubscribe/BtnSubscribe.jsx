import { Button} from 'react-bootstrap';
import * as axios from 'axios'
const BtnSubscribe =(props)=>{
	

	return (


			<div>
				{props.follow ?
			<div onClick={()=> props.unFollowClick() } className="d-grid text__none gap-2 "><Button disabled={props.isFollowProgeress}variant="secondary" style={{boxShadow:'none'}}>Отписаться</Button></div> :
	 		<div onClick={()=> props.followClick()} className="d-grid text__none gap-2 "><Button disabled={props.isFollowProgeress} variant="secondary" style={{boxShadow:'none'}}>Подписаться</Button></div>  }
			</div>
		
	)
}

export default BtnSubscribe