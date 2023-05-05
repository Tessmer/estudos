import { createSlice } from "@reduxjs/toolkit";

/* segunda forma de utilizar */

const slice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    open: () => true,
    close: () => false,
  },
});

export const { open, close } = slice.actions;
export default slice.reducer;
