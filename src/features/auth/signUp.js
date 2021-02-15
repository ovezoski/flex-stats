import {useState} from 'react'
import {useDispatch} from 'react-redux'
import firebase from 'firebase'
import {setUser} from './authSlice'
import './auth.css'

function SignUp(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeEmail = e => setEmail(e.target.value)
  const changePassword = e => setPassword(e.target.value)
  const dispatch = useDispatch()

  function signIn(){

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        dispatch(setUser(user.uid))
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  return(
    <div className="auth">
      <h1> Sign Up </h1>

      <div>
        <div>
          <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={changeEmail}
          />
        </div>

        <div>
          <input
          type="text"
          placeholder="Email"
          value={password}
          onChange={changePassword}
          />
        </div>

        <div>
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={changePassword}
          />
      </div>

        <div>
          <input
          type="password"
          placeholder="Confirm Password"
          value={password}
          onChange={changePassword}
          />
        </div>
      </div>

      <button
      className="btn btn-orange"
      onClick={signIn}>
        Sign Up
      </button>

    </div>
  )
}

export default  SignUp
