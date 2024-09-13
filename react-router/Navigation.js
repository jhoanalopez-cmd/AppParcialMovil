import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Íconos de Expo

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen"; // Pantalla de detalles

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Detalles' }} />
    </Stack.Navigator>
  );
}

export default function Layout() {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
              name="Home"
              component={MainStack} // Aquí se usa el stack para la navegación entre Home y Details
              options={{
                drawerLabel: 'Home',
                title: 'Overview',
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
            {/* Oculta ConfigScreen o cualquier otro que no necesites */}
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    );
}
