import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../scenes/user/components/login";
import Menu from "../scenes/user/components/menu";
import Colors from '../theme/colors';

const Stack = createStackNavigator();

function MaisNavigator() {
  return (
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          cardOverlayEnabled: false,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: Colors.primaryColor,
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
          },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: Colors.onBackground,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'Meus Dados',
            headerStyle: {
              shadowColor: 'transparent',
              elevation: 0,
              backgroundColor: Colors.primaryColor,
              shadowRadius: 0,
              shadowOffset: {
                  height: 0,
              }
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ 
            title: 'Login',
            headerStyle: {
              shadowColor: 'transparent',
              elevation: 0,
              backgroundColor: Colors.white,
              shadowRadius: 0,
              shadowOffset: {
                  height: 0,
              }
            },
          }}
        />
      </Stack.Navigator>
  );
}

export default MaisNavigator;
