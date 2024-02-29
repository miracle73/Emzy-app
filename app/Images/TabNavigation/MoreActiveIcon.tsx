import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const MoreActiveIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      opacity={0.4}
    />
    <Path
      fill="url(#b)"
      d="M12 10.31a1.31 1.31 0 1 0 0-2.62 1.31 1.31 0 0 0 0 2.62Z"
      opacity={0.97}
    />
    <Path
      fill="url(#c)"
      d="M8.31 13.69C7.59 13.69 7 14.28 7 15c0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31Z"
      opacity={0.97}
    />
    <Path
      fill="url(#d)"
      d="M15.69 13.69c-.72 0-1.31.59-1.31 1.31 0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31Z"
      opacity={0.97}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.995}
        x2={11.995}
        y1={2}
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
        y1={7.69}
        y2={10.31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={8.31}
        x2={8.31}
        y1={13.69}
        y2={16.31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={15.69}
        x2={15.69}
        y1={13.69}
        y2={16.31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default MoreActiveIcon
