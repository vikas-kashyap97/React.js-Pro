import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    Status : false,
    userData : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { 
        logIn: (state, action) => {
            state.Status = true;
            state.userData = action.payload.userData;
        },
        logOut: (state) => {
            state.Status = false;
            state.userData = null;
        }
    }
})


export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer