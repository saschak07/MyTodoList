//import ListContainer from "./containers/ListContainer";
import AllToDos from "./containers/AllTodos";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ToDoDetails from "./component/toDoDetails/toDoDetails";
import Landing from "./component/landing/landing";
const route = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/toDoList',
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
