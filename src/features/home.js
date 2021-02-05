import stats from '../stats.svg';
import barbell from '../barbell.svg';
import bench from '../bench.svg';
import {Link} from 'react-router-dom'
function Home (){
  return(
    <>

            <div className="dashboard">


                <div>
                  <Link to="/workouts">
                    <div className="block">
                        <img src={barbell} alt="stats" />
                        <div className="name"> My Program  </div>
                    </div>
                  </Link>
                </div>

                <div>
                  <div className="block">
                    <img src={bench} alt="stats" />
                    <div className="name"> Workouts Library </div>
                  </div>
                </div>

                <div>
                  <div className="block">
                    <img src={stats} alt="stats" />
                    <div className="name"> Stats </div>
                  </div>
                </div>


          </div>

            <div className="last-workout">
              <div className="block flex-container">

                <h3> Last workout </h3>
                <div> 2 days ago </div>

                <div> Bench press </div>
                <div> 4x12 65kg </div>

                <div> Barbell Row </div>
                <div> 3x8 25kg </div>

              </div>
            </div>

    </>
  )
}


export default Home;
