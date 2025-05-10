import { MD3LightTheme } from 'react-native-paper';

export const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#d32f2f', 
    secondary: '#000000',
    background: '#f5f5f5',
    surface: '#ffffff',
    onPrimary: '#ffffff'
  }
};
