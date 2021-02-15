import {useSelector, useDispatch} from 'react-redux'
import Counter from '../components/counter'

import {
  selectExercises,
  nextExercise,
  updateRepsState,
  updateWeightState
} from './workoutSlice'


export default function Exercise(props){

  const dispatch = useDispatch();
  const updateReps = value => dispatch(updateRepsState({id: props.id, value}) )
  const updateWeight = value => dispatch(updateWeightState({id: props.id, value}) )



  return(
    <div className={props.active?"exercise active":"exercise"} >
      <div className="block">
        <div className="content">
          <div > {props.name} </div>
          <Counter
           decrement={() => updateReps(-1)}
           increment={() => updateReps(1) }
           counter={props.reps}
           title="Reps"
           />

           <Counter
            decrement={() => updateWeight(-1)}
            increment={() => updateWeight(1) }
            counter={props.weight}
            title="Weight"
            />

        </div>

        <div className="bottom hidden" onClick={ () => dispatch(nextExercise()) }>
          Complete Set
        </div>

      </div>
    </div>
  )
}
