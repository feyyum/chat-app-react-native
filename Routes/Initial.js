import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import Firebase
import auth from '@react-native-firebase/auth';

// Fetch Components
import HomeRoute from './HomeRoute'
import Auth from '../Pages/Auth'

import RNBootSplash from 'react-native-bootsplash'

const Initial = () => {

    const Stack = createStackNavigator()

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    
    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    
    if (initializing) return null;

    return(
        <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    user ? (
                        <Stack.Screen name='HomeRoute' component={HomeRoute} />
                    ) : (
                        <Stack.Screen name='Auth' component={Auth} />
                    )
                }                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Initial