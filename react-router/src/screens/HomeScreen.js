import React, { useEffect, useState } from 'react';
import { Text, View, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Llamar a la API externa (JSONPlaceholder)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    // Si está cargando, mostrar un spinner
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    // Renderizar cada elemento en la lista
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Button
                title="Ver más"
                onPress={() => navigation.navigate('Details', { item })}
            />
        </View>
    );

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
