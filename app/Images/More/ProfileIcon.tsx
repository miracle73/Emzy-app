import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const ProfileIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#F8F8F8" rx={12} />
    <Path
      fill="url(#a)"
      d="M20 20a3.333 3.333 0 1 0 0-6.667A3.333 3.333 0 0 0 20 20Z"
    />
    <Path
      fill="url(#b)"
      d="M20 21.667c-3.34 0-6.06 2.24-6.06 5a.33.33 0 0 0 .333.333h11.454a.33.33 0 0 0 .333-.333c0-2.76-2.72-5-6.06-5Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20}
        x2={20}
        y1={13.333}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={20}
        x2={20}
        y1={21.667}
        y2={27}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default ProfileIcon
