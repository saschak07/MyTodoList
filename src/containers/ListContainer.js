import { Component } from "react";
import ListItems from "../component/ListItems/ListItems";
class ListContainer extends Component{
    state = {
        todos: [
            {
                id: 101,
                title: 'Learn react',
                priority: 'HIGH',
                startDate: '11-03-2023',
                endDate: '21-03-2023'
            },{
                id: 102,
                title: 'Learn node.js',
                priority: 'MEDIUM',
                startDate: '12-03-2023',
                endDate: '22-03-2023'
            }
        ]
    }
    handleCompletion = (todoId) =>{
        let updatedSate = this.state
        updatedSate.todos = updatedSate.todos.filter(data => data.id !== todoId)
        this.setState(updatedSate)

    }
    render( ){
        const listItems = this.state.todos.map(data => 
            <ListItems
                key = {data.id}
                title = {data.title}
                priority = {data.priority}
                startDate = {data.startDate}
                endDate = {data.endDate}
                onCompleteHandler = {(event)=>this.handleCompletion(data.id)}
                />)
        return (
            <div>
                {listItems}
            </div>
        )
    }
    

}

export default ListContainer