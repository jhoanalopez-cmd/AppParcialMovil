import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
        </View>
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
});
