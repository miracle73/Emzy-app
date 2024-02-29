import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const SendMessageIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Circle cx={25} cy={25} r={25} fill="url(#a)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.252 21.975 11.66-5.552c1.7-.81 3.474.966 2.665 2.666l-5.552 11.659c-.759 1.593-3.059 1.495-3.679-.158l-1.027-2.739a2 2 0 0 0-1.17-1.17l-2.74-1.027c-1.652-.62-1.75-2.92-.157-3.679Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={25}
        x2={25}
        y1={0}
        y2={50}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SendMessageIcon
