import React from "react"
import { SafeAreaView } from "react-native"

// Routing Dependencies
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

// Import Pages
import Greeting from './Greeting'
import PhoneVerify from "./PhoneVerify"
import Confirmation from './Confirmation'

// Import Styles
import styles from './Auth.style'

//// Diğer yetkilendirme sayfalarını yönlendirme yapısına ekle.

const Auth = () => {

    const Stack = createStackNavigator()
    
    return(
        <SafeAreaView style={styles.container}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}>
                <Stack.Screen name="Greeting" component={Greeting} />
                <Stack.Screen name="PhoneVerify" component={PhoneVerify} />
                <Stack.Screen name="Confirmation" component={Confirmation} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Auth