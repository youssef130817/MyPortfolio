import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  currentLanguage: "en" | "fr";
}

const initialState: LanguageState = {
  currentLanguage: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === "en" ? "fr" : "en";
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;