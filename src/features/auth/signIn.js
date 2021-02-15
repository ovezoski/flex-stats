import {useState} from 'react'
import {useDispatch} from 'react-redux'
import firebase from 'firebase'
import {setUser} from './authSlice'
import './auth.css'
import {Link} from 'react-router-dom'

function SignIn(){

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
      <h1> Sign In </h1>
      <div>
        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={changeEmail}
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

      <div> Or <Link to="/sign-up"> sign up. </Link> </div>

      <button
      className="btn btn-orange"
      onClick={signIn}>
        Sign In
      </button>

    </div>
  )
}

export default  SignIn
