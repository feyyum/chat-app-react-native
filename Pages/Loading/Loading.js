import React from "react"
import { View } from 'react-native'

import Colors from "../../Constants/Colors/Colors"
import LottieView from 'lottie-react-native'

const Loading = () => {
    return(
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.WHITE,
            }}
        >
            <LottieView style={{width: 200}} source={require('../../assets/lottie/lottie.json')} autoPlay loop />
        </View>
    )
}

export default Loading