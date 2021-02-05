import {useState} from 'react';
import {Link} from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'

import {
  setActiveWorkout,
  selectActiveWorkout
} from './programSlice'

function Workout(props){

  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false);

  var activeWorkout = useSelector(selectActiveWorkout)

  function toggleExpand(){
    setExpanded(!expanded);
  }

  return(
    <div className="workout" >
      <div className="block">
        <div className="content">
        {props.title}

        <div
        className="hidden "
        style={{display: expanded ? "block": "none" }}
        >

          <p> Bench press  <b> 5x8  </b> </p>
          <p> Incline press <b> 5x8   </b> </p>


          <Link to={"/workout/"+props.id}>
            <div className="start block" onClick={() => dispatch(setActiveWorkout(props.id)) }>
              {activeWorkout == -1 && "Start" }
              {activeWorkout != -1 &&
                ( activeWorkout == props.id? "Continue" : "Switch to this workout") }
            </div>
          </Link>


        </div>

        </div>

        <div className="bottom" onClick={toggleExpand } >

          <FaAngleDown
          style={{display: expanded ? "none": "block" }}
          preserveAspectRatio="none"
          width="20px"
          className="daa" />

          <FaAngleUp
          style={{display: expanded ? "block": "none" }}
          preserveAspectRatio="none"
          width="20px"
          className="daa" />
        </div>

      </div>
    </div>
  )
}

export default Workout
