import {createSlice} from '@reduxjs/toolkit'

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    value: 0,
    activeExercise: 0,
    exerciseCount: 2
  },
  reducers: {
    nextExercise: function(state){
      state.value+=1;
    }
  }
})

export const {nextExercise} = exerciseSlice.actions

export default exerciseSlice.reducer
