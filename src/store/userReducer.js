import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    value: 1,
    users: [],
    products: []
}
const url = "https://fakestoreapi.com/products"
export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
           setusers: (state, action) => {
            state.users = action.payload
        },
        setproducts: async (state, action) => {
            try {
                const { data } = await axios.get(url)
              if(data.length){
                state.products = data
              }
                console.log(data, 'd')
            } catch (error) {
                state.products = []
                console.log(error)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setproducts,
    setusers } = userReducer.actions

export default userReducer.reducer