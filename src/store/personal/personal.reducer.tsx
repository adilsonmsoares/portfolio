import { createReducer } from '@reduxjs/toolkit'
import { getBaseInfo } from './personal.actions'
import { ActionState, PersonalData } from '@shared/types'

const initialState: ActionState<PersonalData> = {
  pending: false,
  error: false
}

export const PersonalReducer = createReducer(initialState, builder => {
  builder
    .addCase(getBaseInfo.pending, state => {
      state.pending = true
    })
    .addCase(getBaseInfo.fulfilled, (state, { payload }) => {
      state.pending = false
      state.data = payload
    })
    .addCase(getBaseInfo.rejected, state => {
      state.pending = false
      state.error = true
    })
})

export default PersonalReducer