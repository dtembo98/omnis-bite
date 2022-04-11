import React, { useState, useRef, useEffect } from "react"
import { View, StyleSheet, Platform } from "react-native"
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field"

import { Screen, Header, Text, Button } from "../../../components"
import { color, globalStyle, spacing } from "../../../theme"

const CELL_COUNT = 4
export const ConfirmationScreen = () => {
  const [value, setValue] = useState("")
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const textInput = useRef(null)
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  useEffect(() => {
    Platform.OS === "ios"
      ? textInput.current.focus()
      : setTimeout(() => textInput.current.focus(), 40)
  }, [])
  return (
    <Screen preset="fixed">
      <Header leftIcon="chevronLeft" />
      <View style={styles.innerContainer}>
        <Text preset="h4" color={color.palette.greyScale900} text="Verification Code" />
        <View style={styles.subtextWrapper}>
          <Text
            preset="bodyLargeRegular"
            color={color.palette.greyScale500}
            text="We have sent the code verification to your "
          />
          <Text preset="bodyLargeRegular" color={color.palette.greyScale500} text="mobile number" />
        </View>

        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => {
            textInput.current?.focus()

            return (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )
          }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button style={styles.button} text="Verify" />
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

  cell: {
    borderColor: color.palette.greyscale200,
    borderRadius: 12,
    borderWidth: 2,
    fontSize: 24,
    height: 56,
    lineHeight: 45,
    textAlign: "center",
    width: 56,
    ...globalStyle.columnCenter,
  },
  codeFieldRoot: { marginTop: 20 },
  focusCell: {
    borderColor: color.palette.redMain,
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
