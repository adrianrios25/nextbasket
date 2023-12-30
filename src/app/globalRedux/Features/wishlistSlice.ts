import { createSlice } from '@reduxjs/toolkit';


type initialStateType = {
    wishlist: any
}

const initialState: initialStateType = {
    wishlist: []
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemInWishlist = state.wishlist.find((item:any) => item.id === action.payload.id);
      if (!itemInWishlist) {
        state.wishlist.push({ ...action.payload});
      }
    },
    removeWishlistItem: (state, action) => {
      const removeItem = state.wishlist.filter((item:any) => item.id !== action.payload);
      state.wishlist = removeItem;
    },
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const {
  addToWishlist,
  removeWishlistItem,
} = wishlistSlice.actions;