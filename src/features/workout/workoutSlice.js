import {createSlice} from '@reduxjs/toolkit'


export const workoutSlice = createSlice({
  name: 'workout',
  initialState:{
    exercises: [
      {id: 5, reps: 12, weight: 3, name: "Bench", active: true},
      {id: 6, reps: 12, weight: 3, name: "da"},
      {id: 7, reps: 12, weight: 3, name: "Bench" }
    ],
    activeExercise: 0
  },
  reducers:{
    nextExercise: (state, action) => {

      state.activeExercise+=1;

      state.exercises = state.exercises.map((exercise, index) =>{
        exercise.active = state.activeExercise == index;
        return exercise
      })
    },

    updateRepsState: (state, action) => {
      state.exercises = state.exercises.map((exercise) => {
        if(exercise.id == action.payload.id) exercise.reps+= action.payload.value
        return exercise
      })
    },
    updateWeightState: (state, action) => {
      state.exercises = state.exercises.map((exercise) => {
        if(exercise.id == action.payload.id) exercise.weight+= action.payload.value
        return exercise
      })
    }

  }
})


export const {updateRepsState, nextExercise, updateWeightState } = workoutSlice.actions;

export const selectExercises = (state) => state.workout.exercises

export default workoutSlice.reducer
