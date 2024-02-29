import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SuccessIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={73}
    fill="none"
    {...props}
  >
    <Circle cx={36} cy={36.5} r={35} stroke="url(#a)" strokeWidth={2} />
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="M50.634 25.616a1.25 1.25 0 0 1 0 1.768l-17.5 17.5a1.25 1.25 0 0 1-1.768 0l-8.75-8.75a1.25 1.25 0 0 1 1.768-1.768l7.866 7.866 16.616-16.616a1.25 1.25 0 0 1 1.768 0Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={36}
        x2={36}
        y1={0.5}
        y2={72.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={36.625}
        x2={36.625}
        y1={25.25}
        y2={45.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SuccessIcon
