import React, { useEffect, useState } from "react"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

import SetUser from "../Pages/UserPages/SetUser/SetUser"
import Home from "../Pages/Home"

import auth from '@react-native-firebase/auth'

import Loading from '../Pages/Loading'

const HomeRoute = () => {

    const [isFullProfile, setIsFullProfile] = useState("initializing")

    useEffect(() => {
        auth().currentUser.displayName ? setIsFullProfile(true) : setIsFullProfile(false)
    }, [])

    const Stack = createStackNavigator()

    if (isFullProfile == "initializing") return <Loading />

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS
        }}
        >
            {
                isFullProfile ? (
                    <Stack.Screen name="Home" component={Home} />
                ) : (
                    <Stack.Screen name="SetUser" component={SetUser} />
                )
            }            
        </Stack.Navigator>
    )
}

export default HomeRoute