import React from "react"
import { View, StyleSheet } from "react-native"
import { Screen, TextField, Header, Text, Button, Checkbox } from "../../components"

import { color, spacing, globalStyle, typography } from "../../theme"

export const LoginScreen = () => {
  return (
    <Screen preset="fixed">
      <Header leftIcon="chevronLeft" headerText="Sign In" />
      <View style={styles.innerContainer}>
        <Text preset="h4" color={color.palette.greyScale900} text="Welcome Back" />
        <View style={styles.subtextWrapper}>
          <Text
            preset="bodyLargeRegular"
            color={color.palette.greyScale500}
            text="Sign in your email and password or continue "
          />
          <Text
            preset="bodyLargeRegular"
            color={color.palette.greyScale500}
            text="with social media"
          />
        </View>

        <TextField preset="withLeftIcon" icon="email" rightIcon="lock" placeholder="Email" />
        <TextField preset="withLeftRightIcon" icon="lock" rightIcon="hide" placeholder="Password" />
        <View style={styles.checkboxRememberWrapper}>
          <Checkbox text="Remember me" />
          <Button textStyle={styles.rememberMe} preset="link" text="Forgot Password?" />
        </View>

        <Button style={styles.button} text="Sign In" />
        <View style={styles.lineWrapper}>
          <View style={styles.line} />
          <Text
            preset="bodyMediumRegular"
            color={color.palette.greyScale400}
            text="Or sign in with"
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
    marginVertical: spacing[1],
  },
  checkboxRememberWrapper: {
    ...globalStyle.rowAlignBetweenBaseline,
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
  rememberMe: {
    color: color.palette.redMain,
    fontFamily: typography.sfProDisplaySemiBold,
    fontSize: 16,
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
