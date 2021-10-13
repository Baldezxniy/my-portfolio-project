const Info =(props)=>{
	
	return (
		<div>
			<div>
				<b>имя</b>: {props.info.fullName}
			</div>
			<div>
				<b>о себе</b>: {props.info.aboutMe}			
			</div>
			<div>
				<b>ищу роботу</b>: {props.info.lookingForAJob ? 'Да' : 'Нет'}
			</div>
			<div>
				<b>умения работы</b>: {props.info.lookingForAJobDescription}
			</div>
		</div>
		)
}

export default Info