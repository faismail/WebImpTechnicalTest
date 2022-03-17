import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StartedPage, BMI, SmallNumber } from "../Pages"
import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator();

const Router = ({ navigation }) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="StartedPage"
            component={StartedPage}
            options={{
            headerShown: false,
            }}
        />
        <Stack.Screen
            name="BMI"
            component={BMI}
            options={{
            headerShown: false,
            }}
        />
        <Stack.Screen
            name="SmallNumber"
            component={SmallNumber}
            options={{
            headerShown: false,
            }}
        />
    </Stack.Navigator>
  );
};

export default Router;
