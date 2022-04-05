import { I18nManager, StyleSheet } from "react-native"
import { color } from "./color"

export const textAlign = () => {
  return I18nManager.isRTL ? "right" : "left"
}

export default StyleSheet.create({
  alignEvenlyInRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  colCenterAlignStar: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
  },
  columnCenter: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  columnEndAlignCenter: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  columnStart: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  rowAlignBetweenBaseline: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rowAlignBetweenStretch: {
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowAlignEnd: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  rowAlignEndBaseline: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  rowAlignTop: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
  },
  rowAround: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  rowBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowCenter: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  rowStart: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowStartAlignEnd: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowStartAlignStart: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowStartAlignStrech: {
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  shadow: {
    backgroundColor: color.palette.white,
    shadowColor: color.palette.grayScale100,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
  shadowMain: {
    shadowColor: color.palette.black,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textAlignLeft: {
    textAlign: "left",
  },
})
