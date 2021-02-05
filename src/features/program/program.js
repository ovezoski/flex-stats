import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import Workout from './workout'

import {
  selectWorkouts
} from './programSlice';


function Program() {

   var workouts = useSelector(selectWorkouts)
   console.log(workouts)

   function Workouts(){
     return workouts.map((workout) => {
      return <Workout key={workout.id} {...workout} />
     })
   }
  return (
      <>
      <div className="title"> My program </div>

      <Workouts />

      </>
  );
}

export default Program;
