import React, { useEffect } from "react"
import { SafeAreaView, StatusBar, StyleSheet, LogBox } from "react-native"

import Colors from './Constants/Colors/Colors'

// Set initial route
import Initial from "./Routes/Initial"

const App = () => {

  //* Just for development
  LogBox.ignoreAllLogs()

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.PURPLE} />
      <Initial />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App