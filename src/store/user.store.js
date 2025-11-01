import { create } from "zustand";

export const userStore = create((set) => ({
  selectedUser: null,
  setSelectedUser: (data) => set({ selectedUser: data }),
  favouriteUsers: localStorage.getItem("favouriteUsers")
    ? JSON.parse(localStorage.getItem("favouriteUsers"))
    : [],
  toggleFavourite: (userId) =>
    set((state) => {
      const isFavourited = state.favouriteUsers.includes(userId);
      const newFavouriteUsers = isFavourited
        ? state.favouriteUsers.filter((id) => id !== userId)
        : [...state.favouriteUsers, userId];
      localStorage.setItem("favouriteUsers", JSON.stringify(newFavouriteUsers));
      return {
        favouriteUsers: newFavouriteUsers,
      };
    }),
  setFavouriteUsers: (users) =>
    set(() => {
      localStorage.setItem("favouriteUsers", JSON.stringify(users));
      return { favouriteUsers: users };
    }),
}));
