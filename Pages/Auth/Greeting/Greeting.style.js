import { StyleSheet, Dimensions } from "react-native"

// Import Constants
import Colors from "../../../Constants/Colors/Colors"
import Fonts from "../../../Constants/Fonts/Fonts"

const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PURPLE,
        alignItems: 'center',
    },
    textArea: {
        flex: 1,
        width: width*0.92,
        justifyContent: 'center'
    },
    buttonArea: {
        marginBottom: 18
    },
    greetingTitle: {
        fontSize: 88,
        left: -6,
        fontFamily: Fonts.OpenSans.SemiBold,
        color: Colors.WHITE
    },
    subTextArea: {
        marginTop: -12
    },
    greetingSubTitle: {
        fontSize: 22,
        fontFamily: Fonts.OpenSans.Light,
        color: Colors.WHITE
    }
})

export default styles