import React, {FunctionComponent} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Splash';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = ()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Login' component={Login} options ={{headerShown: false}}/>
            <Stack.Screen name='Home' component={Home} options ={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack