import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { PersonalReducer } from './personal/personal.reducer'

export const store = configureStore({
  reducer: {
    PersonalData: PersonalReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
