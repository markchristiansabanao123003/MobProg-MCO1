import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        🛍️
      </Text>

      <Text style={styles.title}>
        ShopEasy
      </Text>

      <Text style={styles.subtitle}>
        Your simple online shopping catalog
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Product Catalog')}
      >
        <Text style={styles.buttonText}>
          Browse Products
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  logo: {
    fontSize: 70,
    marginBottom: 15,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});