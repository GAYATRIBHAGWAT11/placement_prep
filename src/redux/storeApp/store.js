import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "/Users/admin/PlacementPrep/placement_prep/src/redux/storeApp/feature/counterSlice.js"


export const store = configureStore({
    reducer: {
        counterme: counterReducer,
    }
})