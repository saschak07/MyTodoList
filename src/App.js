import NavBar from "./component/Navbar/Navbar";
import ListContainer from "./containers/ListContainer";
function App() {
  return (
    <div className="App">
    <h1> My Todo list</h1>
    <NavBar/>
    <ListContainer/>
    </div>
  );
}

export default App;
