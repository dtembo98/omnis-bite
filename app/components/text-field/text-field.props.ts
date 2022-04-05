import { ImageStyle, StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native"
import { TxKeyPath } from "../../i18n"

import { IconTypes } from "../../../assets/icons"
import { TextPresets } from "../text/text.presets"
import { PRESETS } from "./text-field"

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath
  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS

  forwardedRef?: any

  icon?: IconTypes
  iconStyle?: ImageStyle
  labelPreset?: TextPresets
  contentContainerStyle?: StyleProp<ViewStyle>
  rightIcon?: IconTypes
}
