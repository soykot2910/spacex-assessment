import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  launchItems: [],
  filterItems: [],
  isLoading: true,
};

export const getLaunchItems = createAsyncThunk(
  "launch/getLaunchItems",
  async () => {
    try {
      const res = await fetch(
        "https://api.spacexdata.com/v3/launches?limit=10"
      );
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const lancheSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.filterItems = state.launchItems.filter((item) =>
        item.rocket.rocket_name
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
    },
    filterByLaunchStatus: (state, action) => {
      if (state.filterItems.length) {
        state.filterItems = state.filterItems.filter(
          (item) => item.launch_success === JSON.parse(action.payload)
        );
      } else {
        state.filterItems = state.launchItems.filter(
          (item) => item.launch_success === JSON.parse(action.payload)
        );
      }
      //   state.filterItems = state.launchItems.filter(
      //     (item) => item.launch_success === JSON.parse(action.payload)
      //   );
    },
  },
  extraReducers: {
    [getLaunchItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getLaunchItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.launchItems = action.payload;
    },
    [getLaunchItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { handleSearch, filterByLaunchStatus } = lancheSlice.actions;
export default lancheSlice.reducer;
