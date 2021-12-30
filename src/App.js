//import react from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditUser from "./components/EditUser/EditUser";
import Error from "./components/Error/Error";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"  component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/edit" component={EditUser}></Route>
          <Route component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
