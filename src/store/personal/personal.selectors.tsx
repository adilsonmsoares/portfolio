import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

export const selectData = (state: RootState) => state.PersonalData

export const PersonalDataSelector = createSelector(selectData, state => state)
