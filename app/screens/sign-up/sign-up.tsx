import React from "react"
import { View, StyleSheet } from "react-native"
import { Screen, TextField, Header, Text, Button } from "../../components"

import { color, spacing, globalStyle, typography } from "../../theme"

export const SignUpScreen = () => {
  return (
    <Screen preset="fixed">
      <Header leftIcon="chevronLeft" headerText="Sign Up" />
      <View style={styles.innerContainer}>
        <Text preset="h4" color={color.palette.greyScale900} text="Register Account" />
        <View style={styles.subtextWrapper}>
          <Text
            preset="bodyLargeRegular"
            color={color.palette.greyScale500}
            text="Complete your details or continue with"
          />
          <Text preset="bodyLargeRegular" color={color.palette.greyScale500} text="social media" />
        </View>

        <TextField preset="withLeftIcon" icon="user" rightIcon="lock" placeholder="Your name" />
        <TextField preset="withLeftIcon" icon="email" rightIcon="lock" placeholder="Email" />
        <TextField preset="withLeftRightIcon" icon="lock" rightIcon="hide" placeholder="Password" />
        <Button style={styles.button} text="Sign Up" />
        <View style={styles.lineWrapper}>
          <View style={styles.line} />
          <Text
            preset="bodyMediumRegular"
            color={color.palette.greyScale400}
            text="Or sign up with"
          />
          <View style={styles.line} />
        </View>
        <View style={styles.socialButtonsWrapper}>
          <Button preset="circle" icon="google" />
          <Button preset="circle" style={styles.facebookButton} icon="facebook" />
          <Button preset="circle" />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomTextWrapper}>
            <Text
              preset="bodyLargeRegular"
              color={color.palette.black}
              text="Already have an account?"
            />
            <Button textStyle={styles.signinText} preset="link" text="Sign In" />
          </View>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    ...globalStyle.columnEndAlignCenter,
  },
  bottomTextWrapper: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  button: {
    marginVertical: spacing[4],
  },
  facebookButton: {
    marginHorizontal: spacing[6],
  },
  innerContainer: {
    backgroundColor: color.palette.white,
    flex: 1,
    paddingHorizontal: spacing[4],
  },
  line: {
    borderColor: color.palette.grayScale100,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: spacing[5],
  },
  lineWrapper: {
    ...globalStyle.rowBetween,
    marginVertical: spacing[5],
  },
  signinText: {
    color: color.palette.redMain,
    fontFamily: typography.sfProDisplayBold,
    marginHorizontal: spacing[1],
  },
  socialButtonsWrapper: {
    ...globalStyle.rowCenter,
  },
  subtextWrapper: {
    marginBottom: spacing[4],
    marginTop: spacing[1],
  },
})
