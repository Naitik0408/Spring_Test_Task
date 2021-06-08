import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/AppRoutes'
import Dashboard from '../screen/Dashboard';
import NewsDetails from '../screen/NewsDetails';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTES.DASHBOARD}>
            <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
            <Stack.Screen name={ROUTES.NEWS_DETAILS} component={NewsDetails} />
        </Stack.Navigator>
    );
};

export { AppNavigation };