// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from '../screens/LoginModule/Entry';
import SignUp from '../screens/LoginModule/SignUp';
import Login from '../screens/LoginModule/Login';
import DashBoard from '../screens/DashBoardModule/DashBoard';
import AvailableScreen from '../screens/DashBoardModule/AvailableScreen';
import {useSelector} from 'react-redux';
import ProfileScreen from '../screens/DashBoardModule/ProfileScreen';


const Stack = createNativeStackNavigator();

function StackNavigation() {
  const isLoggedIn = useSelector((state:any)=> state.login.isLoggedIn)
  console.log('isLoggedIn',isLoggedIn)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={isLoggedIn ? "Main" : "Entry"}>
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen options={{gestureEnabled:false}} name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={DashBoard} />
        <Stack.Screen name="Available" component={AvailableScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;