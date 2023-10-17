import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';

const Accueil = ({ navigation }) => {
  const [oeuvres, setOeuvres] = useState([]);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyC4VFxtUlNqHL90zsXqN9FJ1BoY0bvq2AU",
        authDomain: "musee-3fc70.firebaseapp.com",
        projectId: "musee-3fc70",
        storageBucket: "musee-3fc70.appspot.com",
        messagingSenderId: "499424182888",
        appId: "1:499424182888:web:49cfa33d193070945c31dd",
        measurementId: "G-NQE236F453"
      });
    }

    const fetchOeuvres = async () => {
      const db = firebase.firestore();
      const oeuvresRef = db.collection('oeuvres');

      try {
        const snapshot = await oeuvresRef.get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOeuvres(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des œuvres:', error);
      }
    };

    fetchOeuvres();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Œuvres</Text>
      <FlatList
        data={oeuvres}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.oeuvreItem}
            onPress={() => navigation.navigate('Single', { oeuvre: item })}
          >
            <Text style={styles.oeuvreText}>{item.nom}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles comme précédemment
});

export default Accueil;