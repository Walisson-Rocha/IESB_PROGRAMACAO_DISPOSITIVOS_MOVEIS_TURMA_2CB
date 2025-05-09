import { createDrawerNavigator } from "@react-navigation/drawer"

import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ConfigScreen from "../screens/ConfigScreen"
import {Ionicons} from '@expo/vector-icons' 

const DrawerNav = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <DrawerNav.Navigator>


      <DrawerNav.Screen
       name="Home"
       component={HomeScreen} 
       options={{
        title: 'Inicio',
       }}
       />


      <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      <DrawerNav.Screen name="Config" component={ConfigScreen} />
    </DrawerNav.Navigator>
  )
}
