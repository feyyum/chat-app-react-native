import { StyleSheet, Dimensions } from 'react-native'

import Colors from '../../../Constants/Colors/Colors'
import Fonts from '../../../Constants/Fonts/Fonts'

const { width } = Dimensions.get("screen") 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    inputAreaContainer: {
        width: width,
        height: 280,
        backgroundColor: Colors.PURPLE
    },
    imageArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageSelector: {
        borderWidth: 2,
        height: 120,
        width: 120,
        borderRadius: 60,
        borderColor: Colors.WHITE,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: "100%",
        height: "100%"
    },
    displayNameArea: {
        alignItems: 'center'
    },
    displayNameTitleArea: {
        width: width*0.92,
        marginBottom: 16,
        marginTop: 8
    },
    displayNameTitle: {
        color: Colors.WHITE,
        fontFamily: Fonts.OpenSans.Medium,
        fontSize: 22
    },
    displayNameInputArea: {
        alignItems: 'center',
        marginBottom: 24
    },
    inputStyle: {
        backgroundColor: Colors.WHITE,
        paddingVertical: 0,
        width: width*0.92,
        height: 48,
        paddingHorizontal: 15,
        fontSize: 16,
        color: Colors.PURPLE,
        borderRadius: 8,
        fontFamily: Fonts.OpenSans.SemiBold,
    },
    buttonAreaContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    errorMessageContainer: {
        width: width*0.92,
        left: width*0.04,
        paddingTop: 24
    },
    errorMessage: {
        color: Colors.RED,
        fontSize: 14
    },
    buttonArea: {
        marginBottom: 18
    }
})

export default styles