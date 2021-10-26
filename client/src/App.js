import './App.css';
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Header from './Header';
import Edituser from './Edituser'
import Count from './Count';
import Nofound from './Nofound';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Header" component={Header} />
        <Route exact path= "/edit-user/:id" component={Edituser}/>
        <Route exact path="/Count" component={Count} />
        <Route exact path="/Nofound" component={Nofound} />
      </Switch>
    </div>
  </Router>
  );
}
 
export default App;