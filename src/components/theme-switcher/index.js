// page.js
'use client';
import React, { useState, useEffect } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import Toggle from '../toggle-switch-button';
import { on, set } from 'ramda';
export default function ThemeSwitcher({ onThemeChange }) {
  const [themeState, setThemeState] = useState('dark');

  // these themes live in the pubic folder

  const themes = {
    dark: '/dark.css',
    light: '/light.css',
  };

  const getMediaQueryPreference = () => {
    const mediaQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(mediaQuery);
    console.log('mql:', mql);
    const hasPreference = typeof mql.matches === 'boolean';
    if (hasPreference) {
      return mql.matches ? 'dark' : 'light';
    }
  };

  const storeUserSetPreference = (pref) => {
    localStorage.setItem('theme', pref);
  };
  const getUserSetPreference = () => {
    localStorage.getItem('theme');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentTheme = localStorage.getItem('theme') || 'dark'; // get the user theme state from localStorage
      setThemeState(currentTheme);
      return;
    }
    const userSetPreference = getUserSetPreference();
    if (userSetPreference !== null && userSetPreference !== undefined) {
      setThemeState(userSetPreference);
      storeUserSetPreference(userSetPreference);
    } else {
      const mediaQueryPreference = getMediaQueryPreference();
      setThemeState(mediaQueryPreference);
    }
  }, []);

  /**
   * Toggles the theme and keep it in localStorage
   * Changes Theme state after 2 milli seconds to give a smooth transition
   * This is so the theme does not change before we apply page animations
   * So that the theme changes while we are -playing our animations not before
   */
  const toggleTheme = async () => {
    console.log('toggleTheme');
    if (themeState === 'dark') {
      await onThemeChange('light');
      localStorage.setItem('theme', 'light');
      setThemeState('light');
      setTimeout(() => {}, 100);
    } else {
      await onThemeChange('dark');
      localStorage.setItem('theme', 'dark');
      setThemeState('dark');
      setTimeout(() => {}, 100);
    }
  };

  // Listen for changes in the users OS theme preference
  if (typeof window !== 'undefined' && onThemeChange) {
    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDarkQuery.addEventListener('change', (event) => {
      const newTheme = event.matches ? 'dark' : 'light';
      setThemeState(newTheme);
      onThemeChange(newTheme);
    });
  }

  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={themeState}>
      <div className='center'>
        <Toggle theme={themeState} toggleTheme={toggleTheme} />
      </div>
    </ThemeSwitcherProvider>
  );
}
