import {Row, Col, Card, FormControl, InputGroup, Button} from 'react-bootstrap';
import{NavLink} from 'react-router-dom';
import NewsNav from './MainNewsComponents/NewsNav/NewsNav.jsx'
const MainNews =(props)=>{
	return (
		<Row>
			<NewsNav />
			<Col md='10' xs='12' >
			<Row className='my-3'>
				<Col className='d-flex justify-content-center'>
		<InputGroup  >
		    <FormControl  style={{minWidth:'40px'}}
		      aria-label="Default" placeholder='Поиск новостей...'
		      aria-describedby="inputGroup-sizing-default" style={{boxShadow:'none',borderRadius:'5px', borderColor:'#000'}}/ >
		      
		</InputGroup>
				</Col>
			</Row>
			<Row className='mt-3'>
				<Col xs='12' sm='6' md='4' lg='4' className='my-2'>
				
					<Card >
					<Card.Header>
								Вода в Африке
						</Card.Header>
						<NavLink to="/myprofile" className='friend__no-style' >
						<Card.Body >
							<Card.Text >
								На днях в Африке прилетел большой самолет который полностью был наполнен водой. Африканцам раздавали воду и сказали что в сорем времени до 2023 года в Африке будут выбуренные колодцы.
								<div className='text-muted friend__time d-flex justify-content-end'>
								</div>
							</Card.Text>

						</Card.Body>
											</NavLink>

						<Card.Footer className='friend__time w-100 text-muted'>
							<div className='d-flex align-items-center'>
								<div className='news__like'>
									❤️
								</div>
								<div className='mx-2 news__like'>
									ком
								</div>
								<div className='news__like'>
									сохрн
								</div>
								<div className='rotste__menu mx-auto'>
									<div className=''>
										. . .
									</div>
									
								</div>
							</div>
							<hr/>
							<div className='d-flex justify-content-end'>
								10м. назад
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
			</Col>
		</Row>
		)
}

export default MainNews