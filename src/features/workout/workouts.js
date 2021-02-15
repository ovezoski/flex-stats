import {useSelector, useDispatch} from 'react-redux'
import {saveWorkout} from '../../firebase'


import {
  selectWorkouts
} from '../program/programSlice';

import {
  selectUser
} from '../auth/authSlice'

function Workouts(){

  let workouts = useSelector(selectWorkouts)
  let user = useSelector(selectUser)


  function Workout(props){
    return(
    <div className="workout">

      <div className="block content">
        <div> {props.title} </div>
        <div>
          <div
          className="start block"
          onClick={() => saveWorkout(user.uid, props) } > Save </div>
        </div>
      </div>

    </div>)
  }
  let workoutsDisplay = workouts.map((workout) => <Workout {...workout} />)

  return(
    <>

      <h2> Workouts Library</h2>

      {workoutsDisplay}

    </>
  )
}

export default Workouts
