import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image} from 'react-native';
import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: <Image source={logo} />,
            headerLayoutPreset: 'center',
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
