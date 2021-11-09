import React from 'react';

import { Image } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';

import Deliverys from "../scenes/delivery/components/deliverys";
import Product from "../scenes/delivery/components/product";
import Images from '../configs/images/';

import Colors from '../theme/colors';

const Stack = createStackNavigator();

function DeliveryNavigator() {
  return (
      <Stack.Navigator
        initialRouteName="Deliverys"
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
          name="Deliverys"
          component={Deliverys}
          options={{
            headerStyle: {
              shadowColor: 'transparent',
              elevation: 0,
              backgroundColor: Colors.primaryColor,
              shadowRadius: 0,
              shadowOffset: {
                  height: 0,
              }
            },
            title: '',
            headerLeft: () => (
              <Image 
                source={Images.logo}
                style={{width:170,height:57, marginLeft:20,marginTop:7}}
              ></Image>
            ),

          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
}

export default DeliveryNavigator;
