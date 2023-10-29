import { createSlice } from "@reduxjs/toolkit";

const collection = createSlice({
  name: "collectionSlice",
  initialState: { value: [] },
  reducers: {
    updater: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default collection.reducer;
export const { updater } = collection.actions;
