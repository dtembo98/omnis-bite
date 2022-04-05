import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.sfProDisplay,
  color: color.text,
  fontSize: 14,
  fontWeight: "400",
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondary information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,

  h1: {
    fontFamily: typography.sfProDisplay,
    fontSize: 48,
    fontWeight: "700",
    color: color.palette.black,
  } as TextStyle,

  h2: {
    fontFamily: typography.sfProDisplay,
    fontSize: 40,
    fontWeight: "700",
    color: color.palette.black,
  } as TextStyle,

  h3: {
    fontFamily: typography.sfProDisplay,
    fontSize: 32,
    color: color.palette.black,
    fontWeight: "700",
  } as TextStyle,

  h4: {
    fontFamily: typography.sfProDisplayBold,
    fontSize: 24,
    color: color.palette.black,
    fontWeight: "700",
  } as TextStyle,

  h5: {
    fontFamily: typography.sfProDisplay,
    fontSize: 20,
    color: color.palette.black,
    fontWeight: "700",
  } as TextStyle,

  h6: {
    fontFamily: typography.sfProDisplayBold,
    fontSize: 18,
    color: color.palette.black,
    fontWeight: "700",
  } as TextStyle,

  bodyXLarge: {
    fontFamily: typography.sfProDisplay,
    fontSize: 18,
    color: color.palette.greyScale,
    fontWeight: "700",
  } as TextStyle,

  bodyLarge: {
    fontFamily: typography.sfProDisplayBold,
    fontSize: 16,
    color: color.palette.greyScale,
    fontWeight: "600",
  } as TextStyle,
  bodyLargeSemiBold: {
    fontFamily: typography.sfProDisplaySemiBold,
    fontSize: 16,
    color: color.palette.greyScale,
    fontWeight: "500",
  } as TextStyle,
  bodyLargeRegular: {
    fontFamily: typography.sfProDisplay,
    fontSize: 16,
    color: color.palette.greyScale,
    fontWeight: "500",
  } as TextStyle,
  bodyMedium: {
    fontFamily: typography.sfProDisplay,
    fontSize: 14,
    color: color.palette.greyScale,
    fontWeight: "600",
  } as TextStyle,
  bodyMediumRegular: {
    fontFamily: typography.sfProDisplay,
    fontSize: 14,
    color: color.palette.greyScale,
    fontWeight: "500",
  } as TextStyle,

  bodySmall: {
    fontFamily: typography.sfProDisplay,
    fontSize: 12,
    color: color.palette.greyScale,
    fontWeight: "600",
  } as TextStyle,

  title: {
    fontFamily: typography.sfProDisplay,
    fontSize: 16,
    color: color.palette.greyScale900,
    fontWeight: "600",
  } as TextStyle,

  titleSmall: {
    fontFamily: typography.sfProDisplay,
    fontSize: 12,
    color: color.palette.greyScale900,
    fontWeight: "600",
  } as TextStyle, // Similar to h7

  buttonText: {
    fontFamily: typography.sfProDisplay,
    fontSize: 16,
    color: color.palette.red,
    fontWeight: "700",
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
