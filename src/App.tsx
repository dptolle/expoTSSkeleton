import { registerRootComponent } from 'expo';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function App() {
    return (
        <>
            <StatusBar style="auto" />
            <SafeAreaView style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </SafeAreaView>
        </>
    );
}

export default registerRootComponent(App);
