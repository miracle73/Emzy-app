import * as React from "react"
import Svg, { Circle, Mask, Path, G } from "react-native-svg"
const WithdrawIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={50}
    fill="none"
    {...props}
  >
    <Circle cx={25.5} cy={25} r={25} fill="#D2B000" />
    <Mask
      id="a"
      width={31}
      height={30}
      x={10}
      y={10}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M10.5 10h30v30h-30z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        d="M16.75 33.75v-12.5h2.5v8.25L33.75 15l1.75 1.75L21 31.25h8.25v2.5h-12.5Z"
      />
    </G>
  </Svg>
)
export default WithdrawIcon
