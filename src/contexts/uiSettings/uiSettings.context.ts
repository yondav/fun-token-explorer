import { createContext, useContext } from 'react';

/**
 * Supported color themes for the app.
 */
export type ColorTheme = 'light' | 'dark' | 'system';

/**
 * Shape of the UI Settings context state.
 */
export interface UiSettingsContextState {
  /** Current selected theme. */
  theme: ColorTheme;
  /** Toggle between light/dark/system theme modes. */
  toggleTheme: (theme?: ColorTheme) => void;
  /** Whether the side drawer is open. */
  sideDrawer: boolean;
  /** Toggle the visibility of the side drawer. */
  toggleSideDrawer: () => void;
}

/**
 * Retrieves user preference from localStorage if available,
 * otherwise falls back to system preference.
 */
const localStoragePref = window.localStorage.getItem(
  'theme'
) as ColorTheme | null;

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

/**
 * Custom hook for consuming the UI Settings context.
 * Throws an error if used outside of the UiSettingsProvider.
 */
export function useUiSettings() {
  const ctx = useContext(UiSettingsContext);

  if (!ctx) {
    throw new Error('useUiSettings must be used within a UiSettingsProvider');
  }

  return ctx;
}
