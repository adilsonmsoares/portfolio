import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { counterReducer } from './counter/counter.reducer'
import { kanyeReducer } from './kanye/kanye.reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer
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
