import React from "react"
import { TextInput, View, ViewStyle, StyleSheet } from "react-native"
import { translate } from "../../i18n"
import { Icon } from "../"
import { TextFieldProps } from "./text-field.props"

import { color, spacing, typography } from "../../theme"

export const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
  withLeftIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  withLeftRightIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    icon,
    rightIcon,
    iconStyle,
    contentContainerStyle,
    ...rest
  } = props

  const containerStyles = [styles.container, PRESETS[preset], styleOverride]
  const inputStyles = [styles.input, inputStyleOverride]
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  const iconStyles = [styles.icon, iconStyle]

  return (
    <View style={containerStyles}>
      {(preset === "withLeftIcon" || preset === "withLeftRightIcon") && (
        <Icon icon={icon} style={iconStyles} />
      )}
      <View style={[styles.contentWrapper, contentContainerStyle]}>
        <TextInput
          placeholder={actualPlaceholder}
          placeholderTextColor={color.palette.greyScale400}
          underlineColorAndroid={color.transparent}
          {...rest}
          style={inputStyles}
          ref={forwardedRef}
        />
      </View>
      {preset === "withLeftRightIcon" && (
        <View style={styles.leftIcon}>
          <Icon icon={rightIcon} style={iconStyles} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: color.palette.greyscale200,
    borderRadius: 1000,
    borderWidth: 1,
    marginVertical: spacing[2],
    paddingHorizontal: spacing[3],
  },
  contentWrapper: {
    flex: 1,
  },
  icon: { marginHorizontal: spacing[2] },
  input: {
    alignSelf: "stretch",
    backgroundColor: color.palette.white,
    borderRadius: 14,
    borderWidth: 0,
    color: color.palette.greyScale400,
    fontFamily: typography.sfProDisplay,
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: spacing[1],
    paddingVertical: spacing[4],
  },
  leftIcon: { flexDirection: "row-reverse" },
})
