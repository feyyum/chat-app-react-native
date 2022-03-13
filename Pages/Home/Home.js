import React from "react"
import { View, Text } from "react-native"
import Button from "../../Components/Button"
import auth from '@react-native-firebase/auth'

// Import Styles
import styles from './Home.style'

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={{color: 'black'}}>Home</Text>
            <Button onPress={() => auth().signOut()} >Çıkış Yap</Button>
        </View>
    )
}

export default Home