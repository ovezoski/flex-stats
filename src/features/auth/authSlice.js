import {createSlice} from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'auth',
  initialState:{
    user: -1,
    lastWorkout: "N/A"
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload
    },
    setLastWorkout: (state, action) =>{
      state.lastWorkout = action.payload
    }
  }
})


export const {setUser} = AuthSlice.actions

export const selectUser = state => state.auth.user
export const selectLastWorkout = state => state.auth.lastWorkout

export const authReducer = AuthSlice.reducer
