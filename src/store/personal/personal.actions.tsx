import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'

export const getBaseInfo = createAsyncThunk('Personal/BaseInfo', async () => {
  const response = await fetch('/api/personal')

  return response.json()
})
