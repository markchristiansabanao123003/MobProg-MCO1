import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ProductDetailsScreen({
  route,
  navigation,
}) {

  const { product } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>
            🛍️
          </Text>
        </View>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.price}>
          ₱{product.price}
        </Text>

        <Text style={styles.label}>
          Product Description
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>
          ← Back to Products
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    elevation: 3,
  },

  imagePlaceholder: {
    height: 150,
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  imageText: {
    fontSize: 60,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },

  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 20,
  },

  label: {
    fontSize: 15,
    color: '#777',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },

  backButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});