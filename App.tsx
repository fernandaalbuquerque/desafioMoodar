import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import Header from './src/components/Header';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ header: () => <Header /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
