import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons as Icon} from '@expo/vector-icons';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as DeliveryActions from "../scenes/delivery/actions";
import DeliveryNavigator from './DeliveryNavigator';
import MaisNavigator from './MaisNavigator';
import CartNavigator from './CartNavigator';
import Colors from '../theme/colors';

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.secondaryColor,
  },
  badgeText: {
    top: -0.5,
    fontSize: 10,
    color: Colors.onSecondaryColor,
  },
});

type Props = {
  color: string,
  focused: string,
  size: number,
};

const Tab = createBottomTabNavigator();

function HomeNavigator({carrinho}) {
  
  const deliveryItens = carrinho.reduce((acc) => {
    acc++;
    return acc;
  }, 0);

  return (
    <Tab.Navigator
      initialRouteName="Delivery"
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}: Props) => {
          let iconName;

          if (route.name === 'Delivery') {
            iconName = `home${focused ? '' : '-outline'}`;
          } else if (route.name === 'Checkout') {
            iconName = `document-text${focused ? '' : '-outline'}`;
          } else if (route.name === 'Mais') {
            iconName = `settings${focused ? '' : '-outline'}`;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarkeyboardHidesTabBar: true,
        tabBaractiveTintColor: Colors.primaryColor,
        tabBarinactiveTintColor: Colors.secondaryText,
        tabBarshowLabel: false,
        tabBarstyle: {
          backgroundColor: Colors.surface,
        }
      })}>
      <Tab.Screen 
        name="Delivery" 
        component={DeliveryNavigator}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CartNavigator}
        options={{
          tabBarIcon: props => (
            <View>
              <Icon name={'cart-outline'} size={props.size} color={props.color} />
              {deliveryItens > 0 ? (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{deliveryItens}</Text>
                </View>
              ) : null}
            </View>
          ),
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="Mais" 
        component={MaisNavigator}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>

  );
}

export default connect(
  (state) => ({
    carrinho: state.delivery.carrinho,
  }),
  (dispatch) => ({
    deliveryActions: bindActionCreators(DeliveryActions, dispatch),
  })
)(HomeNavigator);
