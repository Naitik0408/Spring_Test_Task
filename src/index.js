import React from 'react';
import { View, StatusBar, LogBox, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Configurestore from './store';
import { AppNavigation } from './navigators/AppNavigation';

LogBox.ignoreAllLogs();

const { store } = Configurestore()

const Root = () => (
    <View style={styles.rootContainer}>
        <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
        />
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </Provider>
    </View>
);

export default Root;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    }
});