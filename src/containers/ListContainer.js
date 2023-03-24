import { Component } from "react";
import ListItems from "../component/ListItems/ListItems";
class ListContainer extends Component{
    state = {
        todos: [
            {
                id: 101,
                title: 'Learn react',
                priority: 'HIGH',
                startDate: new Date('2023-03-15'),
                endDate: new Date('2023-03-12')
            },{
                id: 102,
                title: 'Learn node.js',
                priority: 'MEDIUM',
                startDate: new Date('2023-03-12'),
                endDate: new Date('2023-03-15')
            }
        ]
    }
    handleCompletion = (todoId) =>{
        let updatedSate = this.state
        updatedSate.todos = updatedSate.todos.filter(data => data.id !== todoId)
        this.setState(updatedSate)

    }
    handleSortByStartDate = () => {
            let updatedSate = this.state
            updatedSate.todos = updatedSate.todos.sort((dataA, dataB) => dataA.startDate - dataB.startDate)
            this.setState(updatedSate)
    }

    render(){
        const listItems = this.state.todos.map(data => 
            <ListItems
                key = {data.id}
                title = {data.title}
                priority = {data.priority}
                startDate = {data.startDate.toDateString()}
                endDate = {data.endDate.toDateString()}
                onCompleteHandler = {(event)=>this.handleCompletion(data.id)}
                onSortByStartDateHandler = {(event)=>this.handleSortByStartDate()}
                />)
        return (
            <div>
                {listItems}
            </div>
        )
    }

}

export default ListContainer