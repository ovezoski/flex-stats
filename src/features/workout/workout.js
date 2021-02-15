import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Timer from './timer'
import Exercise from './exercise'

import {
  selectExercises,
  selectActiveExercise,
  nextExercise,
  updateReps,
  setActiveExercise
} from './workoutSlice'


function Workouts(props) {
  let dispatch = useDispatch()
  let exercises = useSelector(selectExercises);
  let activeExercise = useSelector(selectActiveExercise)

  if(exercises.length == activeExercise){
    console.log("AUF")
  }

   function Exercises(){
     return exercises.map((exercise, index) => {
       return <Exercise
       key={exercise.id}
       {...exercise}  /> })
   }


  return (
      <div className="" >

        <div className="details">
          <div className="block">
          This is a workout that emphasizes the muscles in your pecs and deltoid area.
          </div>
        </div>

        {activeExercise == exercises.length &&
          <div className="notification">
            <div className="block"> Workout complete

            <Link to="/" >
              <button className="btn btn-orange" onClick={()=>dispatch(setActiveExercise(0))}> Ok </button>
            </Link>

            </div>
          </div>}

        <div className="exercises">
          <Exercises/>
        </div>

        <Timer />
      </div>
  );
}

export default Workouts;
