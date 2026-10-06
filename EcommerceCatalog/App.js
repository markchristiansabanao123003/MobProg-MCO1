import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import ProductCatalogScreen from './ProductCatalogScreen';
import ProductDetailsScreen from './ProductDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563eb',
          },

          headerTintColor: 'white',

          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'ShopEasy',
          }}
        />

        <Stack.Screen
          name="Product Catalog"
          component={ProductCatalogScreen}
          options={{
            title: 'Products',
          }}
        />

        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{
            title: 'Product Details',
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}