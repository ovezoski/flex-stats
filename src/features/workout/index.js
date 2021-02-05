import {useState} from 'react';
import {useSelector} from 'react-redux'

import Timer from './timer'
import Exercise from './exercise'

import {
  selectExercises,
  nextExercise,
  updateReps
} from './workoutSlice'


function Workouts(props) {

  var exercises = useSelector(selectExercises);

   function Exercises(){
     return exercises.map((exercise, index) => {
       return <Exercise
       key={exercise.id}
       {...exercise}  /> })
   }


  return (
      <>
        <div className="details">
          <div className="block">
          This is a workout that emphasizes the muscles in your pecs and deltoid area.
          </div>
        </div>

        <div className="exercises">
          <Exercises/>
        </div>

        <Timer />
      </>
  );
}

export default Workouts;
