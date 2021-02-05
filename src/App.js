import {useDispatch, useSelector} from 'react-redux'
import './styles/main.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './features/home'
import Program from './features/program/program'
import Workout from './features/workout/index'
import Timer from './features/components/timer'

import {selectActiveWorkout} from './features/program/programSlice'

function App() {

  var activeWorkout = useSelector(selectActiveWorkout)

  return (
    <Router>
    <div className="App">

      <div className="logo"> Flex Stats </div>

      <div style={{width: "100%", margin: "20px auto"} }> <Timer/> </div>

      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/workouts">
          <Program />
        </Route>

        <Route path="/workout">
          <Workout />
        </Route>

      </Switch>
    </div>

    <div className="navigation" >
      <Link to="/"> Home </Link>
      <Link to="/workouts"> Workouts </Link>
      { activeWorkout.id !=-1 &&
        <Link to={"/workout/" + activeWorkout.id} > {activeWorkout.title} </Link>}
    </div>

    </Router>
  );
}

export default App;
