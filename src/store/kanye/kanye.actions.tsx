import { createAsyncThunk } from '@reduxjs/toolkit'

export const getKanyeQuote = createAsyncThunk('kanye/kanyeQuote', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000)) // wait to setup load
  const response = await fetch('https://api.kanye.rest/')

  return response.json()
})
