import { createContext, useContext } from 'react';

export type ColorTheme = 'light' | 'dark';

export interface ColorThemeContextState {
  theme: ColorTheme;
  toggleTheme: () => void;
}

const localStoragePref = window.localStorage.getItem('theme') as ColorTheme;
const browserPref: ColorTheme = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches
  ? 'dark'
  : 'light';

export const initialState: ColorThemeContextState = {
  theme: localStoragePref ?? browserPref ?? 'light',
  toggleTheme: () => {},
};

export const ColorThemeContext =
  createContext<ColorThemeContextState>(initialState);

export function useColorTheme() {
  const ctx = useContext(ColorThemeContext);

  if (!ctx)
    throw new Error('useColorTheme must be used within a ThemeProvider');

  return ctx;
}
