import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <Button
        mode='contained'
        onPress={() => navigation.openDrawer()}
      >
        Abrir gaveta
      </Button>

      <Button
        mode='contained-tonal'
        onPress={() => {
          navigation.openDrawer()
          setTimeout(() => navigation.closeDrawer(), 3000)
        }}
      >
        Abrir gaveta autom
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
})
