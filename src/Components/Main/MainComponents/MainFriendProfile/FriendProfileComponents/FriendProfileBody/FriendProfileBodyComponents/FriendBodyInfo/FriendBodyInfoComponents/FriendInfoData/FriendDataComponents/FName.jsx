const FName = (props)=>{
	return (
	<div className='d-flex friend__name'>
		<div>
		{props.name}
		</div>
		<div className='mx-1 ' >
			{props.surname}
		</div>
	</div>
		)
}

export default FName