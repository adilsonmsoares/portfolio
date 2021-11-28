import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/rootStore'

export const selectQuote = (state: RootState) => state.kanyeQuote

export const kanyeQuoteSelector = createSelector(selectQuote, state => state)
