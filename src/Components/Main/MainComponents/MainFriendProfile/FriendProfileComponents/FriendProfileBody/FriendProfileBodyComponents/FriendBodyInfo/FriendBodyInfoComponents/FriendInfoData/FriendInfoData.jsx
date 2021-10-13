import FName from './FriendDataComponents/FName.jsx'
import FCity from './FriendDataComponents/FCity.jsx'
import FStudy from './FriendDataComponents/FStudy.jsx'
const FriendInfoData =(props)=>{
	return (
					<div className='d-flex flex-column '>
						<FName name={props.name}surname={props.surname} />
						<FCity  city={props.city} />
						<FStudy universal={props.universal}/>
					</div>
		)
}

export default FriendInfoData