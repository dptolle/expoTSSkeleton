import { TextStyle } from "react-native"

import * as Colors from "../base/colors"
import * as Outlines from "../abstract/outlines"
import * as Sizing from "../base/sizing"
import * as Typography from "../base/typography"

type Input = "primary"
export const input: Record<Input, TextStyle> = {
  primary: {
    ...Typography.regular.x30,
    lineHeight: 0,
    padding: Sizing.x20,
    borderColor: Colors.neutral.s300,
    borderWidth: Outlines.borderWidth.hairline,
    borderRadius: Outlines.borderRadius.small,
  },
}

type InputLabel = "primary"
export const inputLabel: Record<InputLabel, TextStyle> = {
  primary: {
    ...Typography.semibold.x20,
    marginBottom: Sizing.x10,
  },
}
