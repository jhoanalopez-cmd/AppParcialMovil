import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Configuración del Stack Navigator
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}

// Configuración del Drawer Navigator
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={StackNavigator} 
            options={{
              drawerLabel: 'Home',
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={focused ? '#2196F3' : '#000'}
                />
              ),
              drawerLabelStyle: { color: '#2196F3' },
            }}
          />
          {/* Puedes eliminar otras pantallas si no son necesarias */}
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
