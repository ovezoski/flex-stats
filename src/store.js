import {configureStore} from '@reduxjs/toolkit'
import exerciseReducer from './features/exerciseSlice'
import workoutReducer from './features/workout/workoutSlice'
import programReducer from './features/program/programSlice'

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
    workout: workoutReducer,
    program: programReducer
  }
})
