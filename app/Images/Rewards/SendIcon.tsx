import * as React from "react"
import Svg, { Circle, Mask, Path, G } from "react-native-svg"
const SendIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Circle cx={25} cy={25} r={25} fill="#D2B000" />
    <Mask
      id="a"
      width={30}
      height={30}
      x={11}
      y={10}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M11 10h30v30H11z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        d="M14.75 35V15L38.5 25 14.75 35Zm2.5-3.75L32.063 25 17.25 18.75v4.375L24.75 25l-7.5 1.875v4.375Z"
      />
    </G>
  </Svg>
)
export default SendIcon
