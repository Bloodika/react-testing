const {createSlice} = require("@reduxjs/toolkit");

export const catSlice = createSlice({
    name: "cat",
    initialState: {picture: ""},
    reducers: {
        setCatPic(state, action) {
            state.picture = action.payload;
        }
    }

})


export const {setCatPic} = catSlice.actions;
