import './ListItems.css'
const ListItems = (props) => {
    return( <div className="w3-bar w3-green list-position">
                <div className="w3-bar-item">{props.title}</div>
                <div className="w3-bar-item">{props.priority}</div>
                <div className="w3-bar-item">{props.startDate}</div>
                <div className="w3-bar-item">{props.endDate}</div>
            </div> )
}

export default ListItems