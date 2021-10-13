import MainMyPrifile from './MainMyProfile.js'

import React from 'react';
import {Spinner} from 'react-bootstrap'

class MainMyClassContainer extends React.Component {
	componentDidMount (){
		this.props.MyStatus(this.props.myId)
	}
	savePhoto =(photoMain)=>{
		this.props.updatePhoto(photoMain)
	}

	render =()=>{

		if(!this.props.isMyProfile){
			return <div className='d-flex justify-content-center'><Spinner size='sm' animation="border" variant="primary" /></div>
		}	
		return (
			<MainMyPrifile  {...this.props} savePhoto={this.savePhoto}/>
			)
	}
}


export default MainMyClassContainer