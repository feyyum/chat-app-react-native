import React from "react"
import { Dimensions, Pressable, StyleSheet, Vibration } from "react-native"

// Custom Components
import Text from '../Components/Text'

// Constants
import Fonts from "../Constants/Fonts/Fonts"
import Colors from "../Constants/Colors/Colors"

const { width } = Dimensions.get("screen")

const Button = (props) => {

    const detectStyle = (isText) => {
        if(props.isSecondary) {
            return isText ? styles.text.secondary : styles.button.secondary
        } else if (props.isDisabled) {
            return isText ? styles.text.disabled : styles.button.disabled
        } else {
            return isText ? styles.text.primary : styles.button.primary
        }
    }

    const handlePress = () => {
        Vibration.vibrate(16)
        props.onPress()
    }

    return(
        <Pressable 
            disabled={props.isDisabled ? props.isDisabled : false}
            onPress={handlePress}
            style={detectStyle()}
            hitSlop={props.customHitSlop ? props.customHitSlop : 12}
        >
            <Text style={detectStyle(true)}>{props.children}</Text>
        </Pressable>
    )
}

const nicheStyles = StyleSheet.create({
    button: {
        width: width*0.92,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontFamily: Fonts.OpenSans.Medium,
    }
})

const styles = StyleSheet.create({
    button: {
        primary: {
            ...nicheStyles.button,
            backgroundColor: Colors.PURPLE
        },
        secondary: {
            ...nicheStyles.button,
            backgroundColor: Colors.WHITE
        },
        disabled: {
            ...nicheStyles.button,
            backgroundColor: Colors.GRAY
        }
    },
    text: {
        primary: {
            ...nicheStyles.text,
            color: Colors.WHITE
        },
        secondary: {
            ...nicheStyles.text,
            color: Colors.PURPLE
        },
        disabled: {
            ...nicheStyles.text,
            color: Colors.WHITE
        }
    }
})

export default Button