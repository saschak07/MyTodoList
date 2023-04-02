import {useParams,useNavigate} from 'react-router-dom'
import './toDoDetails.css'
const ToDoDetails = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/')
  }

  const params = useParams();
    return(<div className="w3-container container">
    
    <div className="w3-card-4" style={{width:'50%'}}>
      <header className="w3-container w3-green">
        <h1>{params.title}</h1>
      </header>
  
      <div className="w3-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
        <footer className="w3-container w3-green" onClick={(event) => handleClose()}>
        <h5>click to close</h5>
      </footer>
    </div>
  </div>)

}

export default ToDoDetails