import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
  name: "optionSlice",
  initialState: {
    value: {
      sort: {
        id: 1,
        value: "sort",
        state: false,
      },
      createNew: {
        id: 2,
        value: "new",
        state: false,
      },
    },
  },
  reducers: {
    turnOff: (state) => {
      Object.values(state.value).forEach((value) => {
        value.state = false;
      });
    },
    sortStateChange: (state, actions) => {
      Object.values(state.value).forEach((value) => {
        if (value.id != 1) {
          value.state = false;
        }
      });
      state.value.sort.state =
        actions?.payload?.value || !state.value.sort.state;
    },
    createNewStateChange: (state, actions) => {
      Object.values(state.value).forEach((value) => {
        if (value.id != 2) {
          value.state = false;
        }
      });
      state.value.createNew.state =
        actions?.payload?.value || !state.value.createNew.state;
    },
    updateSortValue: (state, action) => {
      state.value.sort.value =
        action.payload == "none" ? "sort" : action.payload;
    },
    // updateCreateNewValue: (state, action) => {
    //   state.value.createNew.value =
    //     action.payload == "none" ? "new" : action.payload;
    // },
  },
});

export default optionSlice.reducer;
export const {
  turnOff,
  sortStateChange,
  createNewStateChange,
  updateSortValue,
  // updateCreateNewValue,
} = optionSlice.actions;
