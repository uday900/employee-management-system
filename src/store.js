import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./slices/usersSlice";
import rolesSlice from "./slices/rolesSlice";

const store = configureStore({
    reducer:{
        users : usersSlice,
        roles : rolesSlice
    }
})

export default store;