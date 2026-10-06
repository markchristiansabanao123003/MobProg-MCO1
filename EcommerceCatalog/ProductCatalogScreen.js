import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 1299,
    category: 'Electronics',
    description:
      'High-quality wireless headphones with clear sound and comfortable ear cushions.',
  },

  {
    id: '2',
    name: 'Smart Watch',
    price: 1999,
    category: 'Electronics',
    description:
      'A stylish smart watch with fitness tracking, notifications, and a long-lasting battery.',
  },

  {
    id: '3',
    name: 'Running Shoes',
    price: 1599,
    category: 'Fashion',
    description:
      'Lightweight running shoes designed for comfort during exercise and everyday activities.',
  },

  {
    id: '4',
    name: 'Backpack',
    price: 899,
    category: 'Accessories',
    description:
      'A durable everyday backpack with multiple compartments for school, work, or travel.',
  },
];

export default function ProductCatalogScreen({ navigation }) {

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Product Details', {
          product: item,
        })
      }
    >

      <Text style={styles.productName}>
        {item.name}
      </Text>

      <Text style={styles.category}>
        {item.category}
      </Text>

      <Text style={styles.price}>
        ₱{item.price}
      </Text>

      <Text style={styles.details}>
        View Details →
      </Text>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Product Catalog
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>
          ← Back to Home
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 5,
  },

  list: {
    padding: 15,
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },

  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 10,
  },

  details: {
    color: '#2563eb',
    fontWeight: 'bold',
  },

  backButton: {
    backgroundColor: '#333',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});