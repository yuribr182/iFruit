import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from "../scenes/delivery/components/cart";

import Colors from '../theme/colors';

const Stack = createStackNavigator();

function CartNavigator() {

  return (
      <Stack.Navigator
        initialRouteName="Cart"
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
          name="Cart"
          component={Cart}
          options={{
            title: 'Carrinho',
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
      </Stack.Navigator>
  );
}

export default CartNavigator;
