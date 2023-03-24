const NavBar = (props) => {
    return( 
    <div className="w3-bar w3-light-grey">
    <a href="/" className="w3-bar-item w3-button">Home</a>
    <a href="/" className="w3-bar-item w3-button">Insert new Todo</a>
    <div className="w3-dropdown-hover">
      <button className="w3-button">Sort By</button>
      <div className="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="/" className="w3-bar-item w3-button">Priority</a>
        <a href="/" onClick={props.onSortByStartDateHandler} className="w3-bar-item w3-button">start Date</a>
        <a href="/" className="w3-bar-item w3-button">end Date</a>
      </div>
    </div>
  </div> )
}
export default NavBar;