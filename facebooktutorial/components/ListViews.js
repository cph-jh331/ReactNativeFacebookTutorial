import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionLists from './SectionLists';

export default class ListViews extends Component {
    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                    <SectionLists />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})