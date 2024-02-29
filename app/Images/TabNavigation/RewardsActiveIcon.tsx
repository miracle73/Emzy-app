import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const RewardsActiveIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M19.97 10v8c0 3-1 4-4 4h-8c-3 0-4-1-4-4v-8h16Z"
      opacity={0.4}
    />
    <Path
      fill="url(#b)"
      d="M21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z"
    />
    <Path
      fill="url(#c)"
      d="M11.64 5H6.12a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0L11.64 5Z"
      opacity={0.4}
    />
    <Path
      fill="url(#d)"
      d="M17.87 5h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3Z"
      opacity={0.4}
    />
    <Path
      fill="url(#e)"
      d="M8.94 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10H8.94Z"
      opacity={0.6}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.97}
        x2={11.97}
        y1={10}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12}
        x2={12}
        y1={5}
        y2={10}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={8.756}
        x2={8.756}
        y1={2.003}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={15.234}
        x2={15.234}
        y1={2.003}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={11.955}
        x2={11.955}
        y1={10}
        y2={16.143}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default RewardsActiveIcon
