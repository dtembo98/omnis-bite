import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Icon, Text, Checkbox } from "../../components"
import { color, spacing, globalStyle } from "../../theme"

import { RestraurantType } from "../../models/fake-db"

type RestrauntCardProps = {
  restraurant?: RestraurantType
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const RestrauntCard = (props: RestrauntCardProps) => {
  const {
    restraurant: { time, name, status, rating },
  } = props

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconTextWrapper}>
        <View style={styles.iconWrapper}>
          <Icon icon="restraurant" />
        </View>
        <View style={styles.textWrapper}>
          <Text
            style={styles.title}
            text={name}
            preset="bodyMediumSemiBold"
            color={color.palette.greyScale900}
          />
          <View style={styles.subTextWrapper}>
            <View style={styles.ratingWrapper}>
              <Icon icon="star" />
              <Text
                style={styles.rating}
                text={`${rating}`}
                color={color.palette.orange}
                preset="bodyMedium"
              />
            </View>
            <View style={styles.dotWrapper}>
              <Icon icon="dot" />
            </View>
            <View style={styles.statusTimeWrapper}>
              <Text
                text={status}
                color={color.palette.greyScale500}
                preset="bodyMedium"
                style={styles.rating}
              />
              <Text text={time} color={color.palette.greyScale500} preset="bodyMedium" />
            </View>
          </View>
        </View>
      </View>
      <Checkbox />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyle.rowBetween,
    paddingVertical: spacing[3],
  },
  dotWrapper: {
    marginHorizontal: spacing[1],
  },
  iconTextWrapper: { ...globalStyle.rowStart },
  iconWrapper: {
    ...globalStyle.columnCenter,
  },
  rating: {
    paddingHorizontal: spacing[1],
  },
  ratingWrapper: { ...globalStyle.rowStart },
  statusTimeWrapper: { ...globalStyle.rowStart },
  subTextWrapper: { ...globalStyle.rowBetween },
  textWrapper: {
    paddingLeft: spacing[4],
  },
  title: {
    paddingBottom: spacing[2],
  },
})
