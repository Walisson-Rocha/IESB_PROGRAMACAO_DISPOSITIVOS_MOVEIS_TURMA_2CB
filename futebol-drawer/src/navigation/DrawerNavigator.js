import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EscudoScreen from '../screens/EscudoScreen';
import JogadoresScreen from '../screens/JogadoresScreen';
import TitulosScreen from '../screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#d32f2f' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#d32f2f',
        drawerIcon: ({ color, size }) => {
          const icons = {
            Escudo: 'shield-checkmark',
            Jogadores: 'people',
            Títulos: 'trophy'
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        }
      })}
    >
      <Drawer.Screen name="Escudo" component={EscudoScreen} />
      <Drawer.Screen name="Jogadores" component={JogadoresScreen} />
      <Drawer.Screen name="Títulos" component={TitulosScreen} />
    </Drawer.Navigator>
  );
}
