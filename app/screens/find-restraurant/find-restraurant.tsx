import React from "react"
import { View, StyleSheet } from "react-native"
import { Screen, TextField, Text, Button, AutoImage } from "../../components"

import { color, spacing, globalStyle } from "../../theme"
const RestrauntImage = require("../../../assets/images/restraurant.png")

export const FindRestraurantScreen = () => {
  return (
    <Screen preset="fixed">
      <View style={styles.imageWrapper}>
        <AutoImage style={styles.image} source={RestrauntImage} />
      </View>
      <View style={styles.innerContainer}>
        <Text
          style={styles.textWrapper}
          preset="h4"
          color={color.palette.greyScale900}
          text="Find restaurants near you"
        />
        <View style={styles.subtextWrapper}>
          <Text
            style={styles.subText}
            preset="bodyLargeRegular"
            color={color.palette.greyScale500}
            text="Please enter your location or allow access to your location to find restaurants near you"
          />
        </View>
        <Button style={styles.button} textStyle={styles.buttonText} text="Use Current Location" />
        <TextField
          preset="withLeftIcon"
          icon="location"
          placeholder="Location, or restaurants..."
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.palette.red200,
    color: color.palette.redMain,
    marginVertical: spacing[4],
  },
  buttonText: {
    color: color.palette.redMain,
  },
  image: {
    height: 115,
    width: 115,
  },
  imageWrapper: { ...globalStyle.columnCenter, flex: 1 },
  innerContainer: {
    backgroundColor: color.palette.white,
    flex: 3,
    paddingHorizontal: spacing[4],
  },
  subText: {
    textAlign: "center",
  },
  subtextWrapper: {
    alignItems: "center",
    marginBottom: spacing[3],
    marginTop: spacing[2],
  },
  textWrapper: {
    textAlign: "center",
  },
})
