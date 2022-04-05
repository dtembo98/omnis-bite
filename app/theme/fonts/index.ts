import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    // Montserrat: require("./Montserrat-Regular.ttf"),
    // "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
    SFProDisplay: require("./SFProDisplay-Regular.ttf"),
    "SFProDisplay-Bold": require("./SFProDisplay-Bold.ttf"),
    "SFProDisplay-SemiBold": require("./SFProDisplay-Semibold.ttf"),
    "SFProDisplay-Medium": require("./SFProDisplay-Medium.ttf"),
  })
}
