import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { Screen, Header } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  paddingHorizontal: spacing[3],
}

export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Header leftIcon="chevronLeft" headerText="Sign up" />
    </Screen>
  )
})

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: color.palette.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    marginTop: spacing[6],
    paddingVertical: spacing[4],
  },
})
