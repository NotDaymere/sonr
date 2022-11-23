import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
    name : 'jobs',
    initialState : {
        styleView : 0
    },
    reducers: {
        changeStyleView(state, action) {
            state.styleView = action.payload.id
        }
    }
})

export const {changeStyleView} = jobsSlice.actions

export default jobsSlice.reducer