import { createSlice } from "@reduxjs/toolkit";

const spriteSlice = createSlice({
  name: "sprite",
  initialState: {
    bobState: {
      x: 175,
      y: 175,
      using: false,
      actions: [],
    },
    catState: {
      x: 175,
      y: 175,
      using: true,
      actions: [],
    },
  },
  reducers: {
    setX(state, action) {
      if (action.payload.sprite === "bob") {
        state["bobState"].x += action.payload.value;
      } else {
        state["catState"].x += action.payload.value;
      }
    },
    setY(state, action) {
      if (action.payload.sprite === "bob") {
        state["bobState"].y += action.payload.value;
      } else {
        state["catState"].y += action.payload.value;
      }
    },
    setUsing(state, action) {
      if (action.payload.sprite === "bob") {
        state["bobState"].using = action.payload.value;
      } else {
        state["catState"].using = action.payload.value;
      }
    },
    setActions(state, action) {
      if (action.payload.sprite === "bob") {
        state["bobState"].actions = [
          ...state["bobState"].actions,
          action.payload.value,
        ];
      } else {
        state["catState"].actions = [
          ...state["catState"].actions,
          action.payload.value,
        ];
      }
    },
    setInitial: (state) => {
      return {
        bobState: {
          x: 175,
          y: 175,
          using: false,
          actions: [],
        },
        catState: {
          x: 175,
          y: 175,
          using: true,
          actions: [],
        },
      };
    },
  },
});

export const { setX, setY, setUsing, setActions, setInitial } =
  spriteSlice.actions;

export default spriteSlice.reducer;
