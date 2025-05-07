import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#8E44AD' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas' }} />
      <Stack.Screen name="Receita" component={ReceitaScreen} options={{ title: 'Detalhes da Receita' }} />
    </Stack.Navigator>
  );
}
