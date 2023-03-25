import { Component } from "react";
import ListItems from "../component/ListItems/ListItems";
import Navbar from '../component/Navbar/Navbar'
import axios from 'axios'
class ListContainer extends Component{
    state = {
        todos: []
    }

    getLatestState(){
        let updatedSate = {...this.state}
        axios.get('https://todo-be-service.onrender.com/todos')
        .then((resposne) => {
            updatedSate.todos = resposne.data
            console.log(updatedSate)
            this.setState(updatedSate)
        })
        .catch((e) => alert(e))
    }
    componentDidMount(){
        this.getLatestState()
    }
    handleCompletion = (todoId) =>{
        axios.delete(`https://todo-be-service.onrender.com/todo/${todoId}`)
        .then((response) => 
        this.getLatestState()
        )
        .catch((e) => alert(e))

    }

    handleSortByStartDate = () => {
        let updatedSate = {...this.state}
        updatedSate.todos = updatedSate.todos.sort((dataA, dataB) => {
            const date1 = Date.parse(dataA.createdate)
            const date2 = Date.parse(dataB.createdate)
            return date1-date2
        })
        this.setState(updatedSate)
}
    render( ){
        const listItems = this.state.todos.map(data => 
            <ListItems
                key = {data.id}
                title = {data.title}
                priority = {data.priority}
                startDate = {data.createdate}
                endDate = {data.enddate}
                onCompleteHandler = {(event)=>this.handleCompletion(data.id)}
                />)
        return (
            <div>
                <Navbar 
                onSortByStartDateHandler = {(event) => this.handleSortByStartDate()}/>
                {listItems}
            </div>
        )
    }
    

}

export default ListContainer