/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { HomeParams } from './navigation/NavigationParams';
import { ThemeProvider } from './utils/Theme';

export const SCREENS: Record<string, keyof HomeParams> = {
  HOME: 'Home',
  COUNTER: 'Counter',
  LOGIN: 'Login',
  EASYBUTTON: 'EasyButton',
  LIST: 'List',
  LIST_WITH_FETCH: 'ListWithFetch',
  // VIDEO: 'Video',
  MODAL: 'Modal',
}

const App = () => {
  return (
    <ThemeProvider initialTheme={'light'}>
      <AppNavigator/>
    </ThemeProvider>
  );
};



export default App;
