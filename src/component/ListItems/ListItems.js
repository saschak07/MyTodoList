import { Link } from 'react-router-dom'
import './ListItems.css'
const ListItems = (props) => {
    return( 
    <Link to={`/toDetails/${props.title}`}>
    <div className="w3-bar w3-green list-position">
                <div className="w3-bar-item">{props.title}</div>
                <div className="w3-bar-item">{props.priority}</div>
                <div className="w3-bar-item">{props.startDate}</div>
                <div className="w3-bar-item">{props.endDate}</div>
                <button className='button-alignment'
                onClick={props.onCompleteHandler}
                >complete</button>
            </div> 
            </Link>
            )
}

export default ListItems