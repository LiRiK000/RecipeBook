import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from './favorites/favorites.slice';

export const store = configureStore({
    reducer: { favorites: favoritesSlice.reducer },
    devTools: true
})