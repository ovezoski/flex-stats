import {Link} from 'react-router-dom'
import Counter from '../components/counter'
import {
  createWorkout,
  cal,
  getWorkouts,
  saveWorkout,
  getLastWorkout
} from '../../firebase'
function Admin(){

  function LinkBlock(props){
    return(
      <div>
        <Link to={props.to}>
          <div className="block"> {props.title} </div>
        </Link>
      </div>
    )
  }


  return(
    <div className="block">


      <div>
        <input type="text" placeholder="Workout title" />
      </div>

      <div>
        <button className="btn btn-orange" onClick={createWorkout}> Create Workout  </button>
      </div>

      <div>
        <button className="btn btn-orange" onClick={getWorkouts}> registerAddress  </button>
      </div>

      <div>
        <button className="btn btn-orange" onClick={saveWorkout}> saveWorkout  </button>
      </div>

      <div>
        <button className="btn btn-orange" onClick={() => getLastWorkout('uid') }>  getLastWorkout  </button>
      </div>

      <div className="flex-container flex-center">
        <div>
          Exercises count
        </div>
        <div>
          <Counter title="" counter={3} />
        </div>
      </div>

    </div>
  )
}

export default Admin
