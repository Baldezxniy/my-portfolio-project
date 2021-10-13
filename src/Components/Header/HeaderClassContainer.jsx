import React from 'react';
import Header from './Header.js'


class HeaderClassContainer extends React.Component{
		
		
	onDeleteProfile = ()=>{
		this.props.deleteAuth()
	}

	render =()=>{
		return (
			<Header {...this.props} onDeleteProfile={this.onDeleteProfile}/>

			)
	}
}

export default HeaderClassContainer