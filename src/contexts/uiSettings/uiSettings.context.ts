import { createContext, useContext } from 'react';

export type ColorTheme = 'light' | 'dark' | 'system';

export interface UiSettingsContextState {
  theme: ColorTheme;
  toggleTheme: (theme?: ColorTheme) => void;

  sideDrawer: boolean;
  toggleSideDrawer: () => void;
}

const localStoragePref = window.localStorage.getItem('theme') as ColorTheme;
export const browserPref: ColorTheme = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches
  ? 'dark'
  : 'light';

export const initialState: UiSettingsContextState = {
  theme: localStoragePref ?? 'system',
  toggleTheme: () => null,
  sideDrawer: false,
  toggleSideDrawer: () => null,
};

export const UiSettingsContext =
  createContext<UiSettingsContextState>(initialState);

export function useUiSettings() {
  const ctx = useContext(UiSettingsContext);

  if (!ctx) throw new Error('useUiSettings must be used within its provider');

  return ctx;
}
