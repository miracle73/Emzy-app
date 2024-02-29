import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const HomeActiveIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2Z"
    />
    <Path
      fill="url(#b)"
      d="M7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z"
    />
    <Path
      fill="#C7CBD1"
      d="M6.29 10.58a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58ZM17.71 22a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={17.719}
        x2={17.719}
        y1={2}
        y2={10.56}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={6.279}
        x2={6.279}
        y1={13.43}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default HomeActiveIcon
