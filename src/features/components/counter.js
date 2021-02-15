import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

function Counter(props){
  return(
    <div className="counter">
      <div className={props.hidden?"hidden":""}> {props.title} </div>
      <div className="controls">
      <FaMinusCircle className={props.hidden?"hidden":""} onClick={() => props.decrement() }/>
        {props.counter}
      <FaPlusCircle className={props.hidden?"hidden":""} onClick={() => props.increment()} />
      </div>
    </div>
  )
}
export default Counter
