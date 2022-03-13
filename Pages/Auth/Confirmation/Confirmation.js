import React, { useState } from "react"
import { 
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput
} from "react-native"

// Import Styles
import styles from './Confirmation.style'

// Import Custom Components
import Text from "../../../Components/Text"
import Button from "../../../Components/Button"

// Import Constants
import Colors from "../../../Constants/Colors/Colors"

// Custom Hook
import solveErrorMessage from "../../../Hooks/useFirebaseErrorMessage"

import auth from '@react-native-firebase/auth'

const Confirmation = ({route}) => {

    const { confirmation } = route.params

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [verificationCode, setVerificationCode] = useState("")
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const keyboardHook = (text) => {
        setVerificationCode(text)
        if (text.length == 6) {
            Keyboard.dismiss()
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    const handleButtonPress = async () => {
        try {
            setButtonDisabled(true)
            setLoading(true)
            await confirmation.confirm(verificationCode)
            setLoading(false)
            setVerificationCode("")
        } catch (err) {
            setLoading(false)
            pushError(err)
            setVerificationCode("")
            setButtonDisabled(true)
        }
    }

    // Error pushlarken mutlaka bunu kullan.
    const pushError = (err) => {
        setErrors([err, ...errors])
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
                                <Text style={styles.inputAreaTextTitle}>Doğrulama Kodun</Text>
                            </View>
                            <View style={styles.inputAreaInput}>
                                <TextInput 
                                    value={verificationCode}
                                    onChangeText={(text) => keyboardHook(text)}
                                    maxLength={6}
                                    style={styles.textInput}
                                    selectionColor={Colors.PURPLE}
                                    placeholderTextColor={Colors.GRAY}
                                    blurOnSubmit
                                    autoFocus
                                    keyboardType="phone-pad"
                                    placeholder="0 0 0 0 0 0"
                                    placeholderTextColor={Colors.GRAY}
                                    multiline
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
                                {loading ? "Yükleniyor" : "Doğrula"}
                            </Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Confirmation