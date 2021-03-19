import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20},
        { name: 'Friend #2', age: 30},
        { name: 'Friend #3', age: 32},
        { name: 'Friend #4', age: 35},
        { name: 'Friend #5', age: 36},
        { name: 'Friend #6', age: 38},
        { name: 'Friend #7', age: 50},
        { name: 'Friend #8', age: 12},
        { name: 'Friend #9', age: 13}
        { name: 'Friend #9', age: 13}
    ];
    return (
    <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }}
      />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;