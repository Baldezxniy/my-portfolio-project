import 'bootstrap/dist/css/bootstrap.min.css';
import {Col } from 'react-bootstrap'
import React, {useState} from 'react'
import Pagination from '@mui/material/Pagination';
var numPage;
const MyFrienButton = (props)=>{

	const countPage = Math.ceil(props.totalCoundUser /  props.pageSize);		
	let pageCount = []
	for(let i=1; i <= countPage; i++){
		pageCount.push(i)
	}	
	const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
	setPage(value);
	numPage = value;
		};
		return(

		<Col sm='12' className='d-flex justify-content-center mb-3' > 
	      <Pagination count={countPage} onChange={handleChange}siblingCount={0}
	      	page={props.totalPage} size="small"
	      	onClick={(e)=>{ props.setFrienClick(numPage)}} />

		</Col>
		)
}

export default MyFrienButton
