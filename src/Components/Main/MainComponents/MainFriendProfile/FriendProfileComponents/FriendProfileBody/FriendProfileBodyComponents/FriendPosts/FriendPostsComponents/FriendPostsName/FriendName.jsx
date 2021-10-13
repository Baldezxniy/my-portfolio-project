import FName from './FriendNameComponents/FName.jsx'
import FSurname from './FriendNameComponents/FSurname.jsx'



const FriendName =(props)=>{
	return (
								<div className="d-flex friend__name">
									<FName name={props.name}/>
										<FSurname surname={props.surname}/>								
									</div>
		)
}

export default FriendName