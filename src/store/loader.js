import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
}
export const loaderReducer = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        stopLoading: (state) => {
            state.loading = false
        },
    },
})

export const { startLoading, stopLoading } = loaderReducer.actions

export default loaderReducer.reducer