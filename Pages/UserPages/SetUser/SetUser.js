import React, { useState } from 'react'
import { View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Image, Platform } from 'react-native'
import Button from '../../../Components/Button'

import Text from '../../../Components/Text'
import Colors from '../../../Constants/Colors/Colors'
import solveErrorMessage from '../../../Hooks/useFirebaseErrorMessage'

import styles from './SetUser.style'

// Import Third Party Functions
import ImagePicker from 'react-native-image-crop-picker'

import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'

// TODO: Isloading state'ini unutma!
//// CropImagePicker ile image alma ve kırpma işlemleri
// TODO: Image çekme ve yükleme işlemleri
// TODO: Kullanıcı bilgilerini güncelleme işlemleri

const SetUser = ({ navigation }) => {    

    const [fullName, setFullName] = useState(null)
    const [imagePath, setImagePath] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const handleImagePicker = () => {
        ImagePicker.openPicker({
            width: 320,
            height: 320,
            cropping: true
          }).then(image => {
            Platform.OS == "android" ? (setImagePath(image.path)) : (setImagePath(image.path.split('//')[1]))
          })
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        if (imagePath != null) {
            const imageReference = storage().ref(`/profile_pictures/${auth().currentUser.uid}.jpg`)
            try {
                await imageReference.putFile(imagePath)
                const imageURL = await storage().ref(`profile_pictures/${auth().currentUser.uid}.jpg`).getDownloadURL()
                await auth().currentUser.updateProfile({
                    photoURL: imageURL
                })

            } catch (err) {
                pushError(err)
                setIsLoading(false)
            }
        }
        if (fullName) {
            try {
                await auth().currentUser.updateProfile({
                    displayName: fullName
                })
            } catch (err) {
                pushError(err)
                setIsLoading(false)
            }
        } else {
            pushError({
                message: "İsmini doldurmak zorundasın."
            })
        }
        setIsLoading(false)
        navigation.push("HomeRoute", { screen: "Home" })
    }

    const pushError = (err) => {
        setErrors([err, ...errors])
    }

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
            keyboardVerticalOffset={35}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.inputAreaContainer}>
                        <View style={styles.imageArea}>
                            <TouchableOpacity style={styles.imageSelector} onPress={handleImagePicker}>
                                <Image 
                                    source={imagePath ? {uri: imagePath} : require("../../../assets/default_pics/default_pp.jpg")}
                                    resizeMode="cover"
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.displayNameArea}>
                            <View style={styles.displayNameTitleArea}>
                                <Text style={styles.displayNameTitle}>Adın ve Soyadın</Text>    
                            </View>
                            <View style={styles.displayNameInputArea}>
                                <TextInput 
                                    style={styles.inputStyle} 
                                    placeholder='Abuzittin İzolasyon'
                                    maxLength={30}
                                    selectionColor={Colors.PURPLE}
                                    placeholderTextColor={Colors.GRAY}
                                    autoComplete="name"
                                    autoFocus
                                    value={fullName}
                                    onChangeText={(text) => setFullName(text)}
                                />   
                            </View>    
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
                    <View style={styles.buttonAreaContainer}>
                        <View style={styles.buttonArea}>
                            <Button isDisabled={isLoading} onPress={() => handleSubmit()} customHitSlop={50}>
                                {
                                    isLoading ? "Yükleniyor" : "Bitir 🎊"
                                }
                            </Button>    
                        </View>    
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default SetUser