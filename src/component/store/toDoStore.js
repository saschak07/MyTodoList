/**
 * redux store to keep track of the username
 * a state variable called name has been initalized as an empty string
 * the store has a reducer : toDo reducer to update the state variable through an action of 
 * type : ADD_NAME
 */
import {createStore} from 'redux'
const todoReducer  = (state = {name : ''}, action) => {
    if(action.type === 'ADD_NAME'){
        state.name = action.name;
    }
    return state
}
const store = createStore(todoReducer)

export default store