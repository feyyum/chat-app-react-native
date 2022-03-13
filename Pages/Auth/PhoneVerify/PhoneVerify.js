import React, { useState } from "react"
import { 
    Keyboard, 
    SafeAreaView,
    TextInput, 
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from "react-native"

import auth from '@react-native-firebase/auth'

import Text from "../../../Components/Text"

// Import Styles
import styles from './PhoneVerify.style'

// Import Constants
import Colors from "../../../Constants/Colors/Colors"
import Button from "../../../Components/Button"

// Custom Hooks
import solveErrorMessage from "../../../Hooks/useFirebaseErrorMessage"

const PhoneVerify = ({navigation}) => {

    // States
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const keyboardHook = (text) => {
        setPhoneNumber(text.split(" ")[2] ? text.split(" ")[2] : "")
        if (text.split(" ")[2] && text.split(" ")[2].length == 10) {
            Keyboard.dismiss()
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    const handleButtonPress = async () => {
        try {
            setLoading(true)
            setButtonDisabled(true)
            await signInWithPhoneNumber(`+90${phoneNumber}`)
            setPhoneNumber("")
            setLoading(false)
            setButtonDisabled(false)
        } catch (err) {
            setLoading(false)
            pushError(err)
            setPhoneNumber("")
        }
    }

    // Error pushlarken mutlaka bunu kullan.
    const pushError = (err) => {
        setErrors([err, ...errors])
    }

    //* Phone Auth

    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        navigation.navigate("Confirmation", { confirmation })
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
                keyboardVerticalOffset={35}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{flex: 1}}>
                        <View style={styles.inputArea}>
                            <View style={styles.inputAreaText}>
                                <Text style={styles.inputAreaTextTitle}>Telefon Numaran</Text>
                            </View>
                            <View style={styles.inputAreaInput}>
                                <TextInput 
                                    value={`🇹🇷 +90 ${phoneNumber}`}
                                    onChangeText={(text) => keyboardHook(text)}
                                    maxLength={19}
                                    style={styles.textInput}
                                    selectionColor={Colors.PURPLE}
                                    placeholderTextColor={Colors.GRAY}
                                    blurOnSubmit
                                    autoFocus
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>
                        <View style={styles.errorMessageArea}>
                            <View style={styles.errorMessageContainer}>
                                {
                                    errors.length > 0 && (
                                        <Text style={styles.errorMessage}>* {solveErrorMessage(errors[0])}</Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.submitArea}>
                            <Button 
                                onPress={handleButtonPress} 
                                isDisabled={buttonDisabled}
                                customHitSlop={32}
                            >
                                {loading ? "Yükleniyor" : "Devam Et"}
                            </Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default PhoneVerify