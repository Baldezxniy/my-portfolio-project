import {connect} from 'react-redux';
import MainMessage from './MainMessage.js';

const mapStateToProps =(state)=>{
	return {
		message: state.messageData
	}
}


const mapDispatchToProps =(dispatch)=>{

}
const MainMessageContainer = connect(mapStateToProps, mapDispatchToProps)(MainMessage);
export default MainMessageContainer;