import 'bootstrap/dist/css/bootstrap.min.css';


const Study =(props)=>{
	return(
		<div className='my-3'>
       <span className='text-muted'>ун.</span> <div className="d-inline">{props.study}</div>
    </div>
		)
}

export default Study;