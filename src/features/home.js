import stats from '../stats.svg';
import barbell from '../barbell.svg';
import bench from '../bench.svg';
import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'
import {selectLastWorkout} from './auth/authSlice'

function Home (){
  let lastWorkout = useSelector(selectLastWorkout)
  return(
    <>

            <div className="dashboard">


                <div>
                  <Link to="/program">
                    <div className="block">
                        <img src={barbell} alt="stats" />
                        <div className="name"> My Program  </div>
                    </div>
                  </Link>
                </div>

                <div>
                <Link to="/workouts">
                  <div className="block">
                    <img src={bench} alt="stats" />
                    <div className="name"> Workouts Library </div>
                  </div>
                </Link>
                </div>

                <div>
                  <Link to="/stats">
                    <div className="block">
                      <img src={stats} alt="stats" />
                      <div className="name"> Stats </div>
                    </div>
                  </Link>
                </div>


          </div>

            <div className="last-workout">
              <div className="block flex-container flex-center">

                <h3> Last workout </h3>
                <div> {lastWorkout} </div>

              </div>
            </div>

    </>
  )
}


export default Home;
