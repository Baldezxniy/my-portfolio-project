import FriendsNameName from './FriendsNameComponents/FriendsNameName/FriendsNameName.jsx'
import FriendsNameSurname from './FriendsNameComponents/FriendsNameSurname/FriendsNameSurname.jsx'
const FriendsName =(props)=>{
	return (
		<div className="friend__name">
			<FriendsNameName name={props.name}/>
			<FriendsNameSurname surname={props.surname}/>						
		</div>
		)
}

export default FriendsName;