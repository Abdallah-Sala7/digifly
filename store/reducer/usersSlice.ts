import { UserInformationI } from "@/components/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateType = {
  users: UserInformationI[];
};

const initialState: stateType = {
  users: [],
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInformationI>) => {
      const users = state.users;

      state.users = [
        ...users,
        {
          id: users.length + 1,
          ...action.payload,
        },
      ];
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<UserInformationI>) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload,
          };
        }
        return user;
      });
    },
  },
});

export const { setUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
