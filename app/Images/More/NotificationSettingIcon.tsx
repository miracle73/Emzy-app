import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const NotificationSettingIcon = (props: any) => (
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
      d="M27.167 26.667c0 .273-.227.5-.5.5H13.333a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h13.334c.273 0 .5.227.5.5Z"
      opacity={0.4}
    />
    <Path fill="url(#b)" d="M26 22v4.167H14V22a6 6 0 0 1 12 0Z" />
    <Path
      fill="url(#c)"
      d="M20 14.5a.504.504 0 0 1-.5-.5v-.667c0-.273.227-.5.5-.5s.5.227.5.5V14c0 .273-.227.5-.5.5Z"
      opacity={0.4}
    />
    <Path
      fill="url(#d)"
      d="M15.333 15.833a.495.495 0 0 1-.353-.147l-.667-.666a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0l.667.667a.503.503 0 0 1 0 .706c-.1.1-.227.147-.354.147Z"
      opacity={0.4}
    />
    <Path
      fill="url(#e)"
      d="M24.667 15.833a.495.495 0 0 1-.354-.147.503.503 0 0 1 0-.706l.667-.667a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .707l-.667.666c-.1.1-.227.147-.353.147Z"
      opacity={0.4}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20}
        x2={20}
        y1={26.167}
        y2={27.167}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={20}
        x2={20}
        y1={16}
        y2={26.167}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={20}
        x2={20}
        y1={12.833}
        y2={14.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={15}
        x2={15}
        y1={14.168}
        y2={15.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={25}
        x2={25}
        y1={14.168}
        y2={15.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default NotificationSettingIcon
