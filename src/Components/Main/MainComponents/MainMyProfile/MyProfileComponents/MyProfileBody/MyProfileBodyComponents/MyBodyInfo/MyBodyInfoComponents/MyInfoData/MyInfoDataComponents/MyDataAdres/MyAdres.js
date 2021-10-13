import 'bootstrap/dist/css/bootstrap.min.css';


const Adres = (props) => {
    return (
    <div className="my-3">
      <span className='text-muted'>г.</span> <div className="d-inline">{props.sity}</div>
    </div>
    )
}
export default Adres;



