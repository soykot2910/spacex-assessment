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
      const res = await fetch("https://api.spacexdata.com/v3/launches");
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
    filterByDate: (state, action) => {
      const formate = (date) => {
        const now = new Date();
        return new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - date
        );
      };

      let startDate = new Date(formate(action.payload));
      let endDate = new Date();

      state.filterItems = state.launchItems?.filter((a) => {
        let date = new Date(a.launch_date_local);
        return date >= startDate && date <= endDate;
      });
    },
    filterByIsUpcoming: (state, action) => {
      state.filterItems=state.launchItems.filter((item) =>
       item.upcoming === JSON.parse(action.payload)
      );
    },
    filterByLaunchStatus: (state, action) => {
      state.filterItems = state.launchItems.filter(
        (item) => item.launch_success === JSON.parse(action.payload)
      );
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

export const {
  handleSearch,
  filterByIsUpcoming,
  filterByLaunchStatus,
  filterByDate,
} = lancheSlice.actions;
export default lancheSlice.reducer;
