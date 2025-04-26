import { useEffect, useMemo, useState, type ReactNode } from 'react';

import {
  browserPref,
  initialState,
  UiSettingsContext,
  type ColorTheme,
} from './uiSettings.context';

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

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: (theme?: ColorTheme) => {
        if (!theme) setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
        else setTheme(theme);
      },

      sideDrawer,
      toggleSideDrawer: () => {
        setSideDrawer(prev => !prev);
      },
    }),
    [sideDrawer, theme]
  );

  return (
    <UiSettingsContext.Provider value={value}>
      {children}
    </UiSettingsContext.Provider>
  );
}
