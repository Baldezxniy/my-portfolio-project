import {Row} from 'react-bootstrap';
import GetQueshin from './QueshinComponents/GetQueshin/GetQueshin.jsx'
import SetQueshin from './QueshinComponents/SetQueshin/SetQueshin.jsx'
const SetingQuesin = (props)=>{
	return (
				<Row>
					<GetQueshin /*Вопросы которые часто задают*/ />
					<SetQueshin /*Задать вопрос *//>
				</Row>
		)
}

export default SetingQuesin

