import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const PasswordSuccessIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={73}
    height={73}
    fill="none"
    {...props}
  >
    <Circle cx={36.5} cy={36.5} r={35} stroke="url(#a)" strokeWidth={2} />
    <Path
      fill="url(#b)"
      d="m25.35 28.433 15.033-5.016c6.75-2.25 10.417 1.433 8.184 8.183L43.55 46.633c-3.367 10.117-8.9 10.117-12.267 0L29.8 42.167l-4.467-1.483c-10.1-3.35-10.1-8.867.017-12.25Z"
      opacity={0.4}
    />
    <Path fill="url(#c)" d="m33.7 37.883 6.35-6.366-6.35 6.366Z" />
    <Path
      fill="url(#d)"
      d="M33.7 39.133c-.317 0-.633-.117-.883-.367a1.257 1.257 0 0 1 0-1.766l6.333-6.367a1.257 1.257 0 0 1 1.767 0 1.257 1.257 0 0 1 0 1.767l-6.334 6.366a1.31 1.31 0 0 1-.883.367Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={36.5}
        x2={36.5}
        y1={0.5}
        y2={72.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={33.491}
        x2={33.491}
        y1={22.756}
        y2={54.221}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={36.875}
        x2={36.875}
        y1={31.517}
        y2={37.883}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={36.867}
        x2={36.867}
        y1={30.27}
        y2={39.133}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default PasswordSuccessIcon
