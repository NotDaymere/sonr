import { configureStore } from "@reduxjs/toolkit";

//Reducers
import jobsReducer from "./jobsSlice";

export default configureStore({
    reducer: {
        jobs: jobsReducer
    }
})