import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import {
  browserPref,
  initialState,
  UiSettingsContext,
  type ColorTheme,
} from './uiSettings.context';

/**
 * React Provider component for managing UI Settings.
 *
 * Handles:
 * - Theme switching (light/dark/system)
 * - Side drawer toggle state
 *
 */
export default function UiSettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<ColorTheme>(initialState.theme);
  const [sideDrawer, setSideDrawer] = useState<boolean>(false);

  useEffect(() => {
    const selectedTheme = theme === 'system' ? browserPref : theme;

    document.documentElement.setAttribute('data-theme', selectedTheme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((theme?: ColorTheme) => {
    if (!theme) setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    else setTheme(theme);
  }, []);

  const toggleSideDrawer = useCallback(() => {
    setSideDrawer(prev => !prev);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      sideDrawer,
      toggleSideDrawer,
    }),
    [sideDrawer, theme, toggleSideDrawer, toggleTheme]
  );

  return (
    <UiSettingsContext.Provider value={value}>
      {children}
    </UiSettingsContext.Provider>
  );
}
