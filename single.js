import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Single = ({ route }) => {
  const { oeuvre } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{oeuvre.nom}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Single;
