import { configureStore } from "@reduxjs/toolkit"
import testSlice from "./testSlice"
 export const store= configureStore({
    reducer:{
        tests: testSlice.reducer
    }
})