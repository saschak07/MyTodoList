import { useState,useEffect } from "react"
import axios from 'axios'
import ListItems from '../component/ListItems/ListItems'
import Navbar from '../component/Navbar/Navbar'

const AllToDos = () => {
    const [toDoList,setToDoList] = useState([]) //empty initializiation of state : toDoList

    //using useEffect hook to load the state of the functional component 
    //by making rest call to backend
    const loadData = async() => {
        try{
            const loadedList = (await axios.get('https://todo-be-service.onrender.com/todos')).data
            setToDoList(loadedList)
        }catch(e) {
            alert(e.message)
        }
    }
    useEffect(() => {
        loadData()
    },[])

    const listItems = toDoList.map(data => 
        <ListItems
            key = {data.id}
            title = {data.title}
            priority = {data.priority}
            startDate = {data.createdate}
            endDate = {data.enddate}
            //onCompleteHandler = {(event)=>this.handleCompletion(data.id)}
            />)
    return(
        <div>
        <h1> My Todo list</h1>
            <div>
                <Navbar 
                //onSortByStartDateHandler = {(event) => this.handleSortByStartDate()}
                />
                {listItems}
            </div>
            </div>
    )
}

export default AllToDos