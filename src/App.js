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
import Workout from './features/workout/workout'
import Workouts from './features/workout/workouts'
import Stats from './features/workout/stats'
import Timer from './features/components/timer'
import SignIn from './features/auth/signIn'
import SignUp from './features/auth/signUp'
import Admin from './features/admin/index'

import {selectActiveWorkout} from './features/program/programSlice'
import {selectUser} from './features/auth/authSlice'

function App() {

  let activeWorkout = useSelector(selectActiveWorkout)
  let user = useSelector(selectUser)

  return (
    <Router>
    <div className="App">

      <div className="logo"> Flex Stats </div>
      <div> {user.email} </div>


      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/program">
          <Program />
        </Route>

        <Route path="/workout">
          <Workout />
        </Route>

        <Route path="/workouts">
          <Workouts />
        </Route>


        <Route path="/stats">
          <Stats />
        </Route>

        <Route path="/sign-in">
          <SignIn />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

      </Switch>
    </div>

    <div className="navigation" >
      <Link to="/"> Home </Link>
      <Link to="/workouts"> Workouts </Link>
      <Link to="/admin"> Admin  </Link>

      { activeWorkout.id !=-1 &&
        <Link to={"/workout/" + activeWorkout.id} > {activeWorkout.title} </Link>}

    </div>

    </Router>
  );
}

export default App;
