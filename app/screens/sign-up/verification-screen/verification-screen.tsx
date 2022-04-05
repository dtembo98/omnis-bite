import React from "react"
import { View, StyleSheet } from "react-native"
import { Screen, TextField, Header, Text, Button } from "../../../components"

import { color, spacing } from "../../../theme"

export const VerificationScreen = () => {
  return (
    <Screen preset="fixed">
      <Header leftIcon="chevronLeft" />
      <View style={styles.innerContainer}>
        <Text preset="h4" color={color.palette.greyScale900} text="Enter your phone number" />
        <View style={styles.subtextWrapper}>
          <Text
            preset="bodyLargeRegular"
            color={color.palette.greyScale500}
            text="You’ll receive 4 digit code to verify account"
          />
        </View>

        <TextField preset="withLeftIcon" icon="phone" placeholder="Phone" />
      </View>
      <View style={styles.buttonWrapper}>
        <Button style={styles.button} text="Continue" />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: spacing[4],
  },

  buttonWrapper: {
    flex: 2,
    paddingHorizontal: spacing[4],
  },

  innerContainer: {
    backgroundColor: color.palette.white,
    flex: 1,
    paddingHorizontal: spacing[4],
  },
  subtextWrapper: {
    marginBottom: spacing[4],
    marginTop: spacing[1],
  },
})
