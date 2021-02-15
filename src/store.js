import {configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

// import exerciseReducer from './features/exerciseSlice'
import workoutReducer from './features/workout/workoutSlice'
import programReducer from './features/program/programSlice'
import {authReducer} from './features/auth/authSlice'

export default configureStore({
  reducer: {
    // exercise: exerciseReducer,
    workout: workoutReducer,
    program: programReducer,
    auth: authReducer
  }
})
