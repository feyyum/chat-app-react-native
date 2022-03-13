import React from 'react'
import { Text } from 'react-native'

const TextComponent = (props) => {
    return(
        <Text 
            {...props}
            style={{fontFamily: "OpenSans-Regular", ...props.style}}
        >
            {props.children}
        </Text>
    )
}

export default TextComponent