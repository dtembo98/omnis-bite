import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[4],
  height: 53,
  borderRadius: 1000,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  shadowOffset: { width: 3, height: 3 },
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
  fontFamily: typography.sfProDisplayBold,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.palette.red } as ViewStyle,
  /**
   * Secondary Button with white background and black text
   */
  secondary: {
    ...BASE_VIEW,
    borderWidth: 2,
    borderColor: color.line,
    backgroundColor: color.palette.white,
  } as ViewStyle,

  /**
   * Secondary Button with white background and black text
   */
  circle: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    height: 56,
    width: 56,
    borderRadius: 1000,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: color.line,
    backgroundColor: color.palette.white,
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: {
    ...BASE_TEXT,
    fontSize: 16,
    fontWeight: "600",
    color: color.palette.white,
  } as TextStyle,
  secondary: {
    ...BASE_TEXT,
    fontSize: 16,
    fontWeight: "600",
    color: color.palette.greyScale900,
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
