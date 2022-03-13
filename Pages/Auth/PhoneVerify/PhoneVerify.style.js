import { Dimensions, StyleSheet } from "react-native"

// Import Constants
import Colors from "../../../Constants/Colors/Colors"
import Fonts from "../../../Constants/Fonts/Fonts"

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    inputArea: {
        height: 240,
        backgroundColor: Colors.PURPLE,
        width: width,
        alignItems: 'center'
    },
    inputAreaText: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 16
    },
    inputAreaTextTitle: {
        color: Colors.WHITE,
        fontFamily: Fonts.OpenSans.Medium,
        width: width*0.92,
        fontSize: 22
    },
    inputAreaInput: {
        marginBottom: 24
    },
    textInput: {
        backgroundColor: Colors.WHITE,
        paddingVertical: 0,
        width: width*0.92,
        height: 48,
        paddingHorizontal: 15,
        fontSize: 16,
        color: Colors.PURPLE,
        borderRadius: 8,
        fontFamily: Fonts.OpenSans.SemiBold,
        textAlign: 'center'
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
    submitArea: {
        flex: 1,
        width: width*0.92,
        left: width*0.04,
        justifyContent: 'flex-end',
        paddingVertical: 18
    }
})

export default styles