import {createSlice} from '@reduxjs/toolkit'

export const ProgramSlice = createSlice({
  name: 'program',
  initialState:{
    activeWorkout: -1,
    workouts: [
      {id: 0, title: "Chest Workout", exercises:[], },
      {id: 1, title: "Back Workout", exercises:[], },
      {id: 2, title: "Arms Workout", exercises:[], }
    ]
  },
  reducers:{
    setActiveWorkout: (state, action) => {
      state.activeWorkout = action.payload
    }
  }
})
export const selectWorkouts = state => state.program.workouts
export const selectActiveWorkout = (state) =>{
  if(state.program.activeWorkout == -1)
    return {id:-1}
  else
    return state.program.workouts[state.program.activeWorkout]
}
export default  ProgramSlice.reducer

export const {setActiveWorkout} = ProgramSlice.actions
