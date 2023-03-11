import { Component } from "react";
import ListItems from "../component/ListItems/ListItems";
class ListContainer extends Component{
    state = {
        todos: [
            {
                title: 'Learn react',
                priority: 'HIGH',
                startDate: '11-03-2023',
                endDate: '21-03-2023'
            }
        ]
    }
    render( ){
        return (
            <div>
                <ListItems
                title = {this.state.todos[0].title}
                priority = {this.state.todos[0].priority}
                startDate = {this.state.todos[0].startDate}
                endDate = {this.state.todos[0].endDate}
                />
            </div>
        )
    }
    

}

export default ListContainer