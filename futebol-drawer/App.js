import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import { customTheme } from './src/theme/theme';

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
