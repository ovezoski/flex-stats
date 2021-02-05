import {useState} from 'react'

export default function Timer(){
  const [active, setActive] = useState(0)
  const [timer, setTimer] = useState(0)
  var startTime = 0;

  function start(){
    startTime = Date.now()
    setActive(true)
  }

  return(
    <div className="timer">
      <div className="block">
      {startTime}
        <div className="row">
          <div> Rest time </div>
          <div className="time">  </div>
        </div>

        <div className="row">
          <div> Intended Rest </div>
          <div className="time"> 2:00 </div>
        </div>

      </div>

      <div>
        <div
        className="block"
        onClick={() => {start()}}
        > Start </div>
      </div>

    </div>
  )
}
