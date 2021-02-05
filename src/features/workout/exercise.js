import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'
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

  function Counter(props){
    return(
      <div className="counter">
        <div className="hidden"> {props.title} </div>
        <div className="controls">
        <FaMinusCircle className="hidden" onClick={() => props.decrement() }/>
          {props.counter}
        <FaPlusCircle className="hidden" onClick={() => props.increment()} />
        </div>
      </div>
    )
  }

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
