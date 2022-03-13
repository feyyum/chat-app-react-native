import React, { useEffect, useState } from "react"
import { Dimensions, SafeAreaView, StatusBar, View } from "react-native"

// Import Custom Components
import Text from "../../../Components/Text"
import Button from "../../../Components/Button"

// Import Styles
import styles from './Greeting.style'

const Greeting = ({navigation}) => {

    const [initialHeight, setInitialHeight] = useState(null)

    useEffect(() => {
        setInitialHeight(Dimensions.get("screen").height-StatusBar.currentHeight)
    }, [])

    const handleNext = () => {
        navigation.navigate("PhoneVerify")
    }

    return(
        <SafeAreaView style={{...styles.container, height: initialHeight}}>
            <View style={styles.textArea}>
                <Text style={styles.greetingTitle}>FLOW</Text>
                <View style={styles.subTextArea}>
                    <Text style={styles.greetingSubTitle}>Mesajlaşma uygulaması.</Text>
                    <Text style={styles.greetingSubTitle}>Yalnızca yüz kişi için.</Text>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <Button 
                    onPress={() => handleNext()} 
                    isSecondary={true}
                    customHitSlop={32}
                >
                    Hadi Başlayalım 🎊
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Greeting