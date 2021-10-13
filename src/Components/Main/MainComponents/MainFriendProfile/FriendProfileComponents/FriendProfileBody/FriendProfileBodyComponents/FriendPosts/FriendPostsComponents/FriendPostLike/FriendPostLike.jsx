const FriendPostLike =(props)=>{
	const onLIkeClick =()=>{
		if(props.like === true){
			props.likePost(props.idUser, props.id)
		}else	if(props.like === false){
			props.unlikePost(props.idUser, props.id)
		}
	}
	


	return (
	<div onClick={onLIkeClick} className=' justify-self-end align-self-end'>
		{props.like ? '❤️' : '🤍'}
	</div>


		)
}

export default FriendPostLike