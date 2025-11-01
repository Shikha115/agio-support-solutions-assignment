import { create } from "zustand";

export const InputStore = create((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  selectedCity: "",
  setSelectedCity: (city) => set({ selectedCity: city }),
  showFavourites: false,
  setShowFavourites: (show) => set({ showFavourites: show }),

  clearFilters: () =>
    set({
      searchTerm: "",
      selectedCity: "",
      showFavourites: false,
    }),
}));
