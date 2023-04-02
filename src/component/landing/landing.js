import './landing.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

    const Landing = () => {
        const [name,setName] = useState('')
        const dispatch = useDispatch();
        const navigate = useNavigate()
        const handleInput = (input) => {
            setName(input);
            console.log(`input name:${name}`)
        }
        const handleSubmit = () => {
            dispatch({type: 'ADD_NAME',name: name})
            navigate('/toDoList')
        }
        return (<div className="w3-card w3-animate-zoom details-body" 
            data-testid="cardContainer">
                 <div className = "contents">
        <h2 className="header-title"> Welcome to ToDo app!</h2>
        <br/>
        <input type="text" className="w3-input w3-border" placeholder="Insert your name ..."
        value={name} onChange={event => handleInput(event.target.value)}/>
        <br/>
        <button className="w3-btn w3-light-blue buttons" onClick={event => handleSubmit()}>Sumbit</button>
        </div>
            </div>
        )
            
    }
    
    export default Landing