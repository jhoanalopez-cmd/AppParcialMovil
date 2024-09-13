import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
    const { item } = route.params;

    const breed = item.breeds[0];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{breed.name}</Text>
            <Image source={{ uri: item.url }} style={styles.image} resizeMode="contain" />
            <Text style={styles.detail}>Temperamento: {breed.temperament}</Text>
            <Text style={styles.detail}>Peso: {breed.weight.metric} kg</Text>
            <Text style={styles.detail}>Esperanza de vida: {breed.life_span}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    detail: {
        fontSize: 18,
        marginBottom: 5,
    },
});
