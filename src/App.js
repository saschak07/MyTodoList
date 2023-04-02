//import ListContainer from "./containers/ListContainer";
import AllToDos from "./containers/AllTodos";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ToDoDetails from "./component/toDoDetails/toDoDetails";
const route = createBrowserRouter([
  {
    path: '/',
    element: <AllToDos/>
  },{
    path: '/toDetails/:title',
    element: <ToDoDetails/>
  }
])
function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App;
