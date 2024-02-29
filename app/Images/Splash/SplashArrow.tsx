import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SplashArrow = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#D2B000"
      d="m18.58 7.94-7-7a1.503 1.503 0 0 0-2.12 2.13l4.43 4.42H2.48a1.5 1.5 0 1 0 0 3h11.41l-4.43 4.42a1.5 1.5 0 0 0 1.06 2.56 1.48 1.48 0 0 0 1.06-.47l7-7a1.5 1.5 0 0 0 0-2.12v.06Z"
    />
  </Svg>
)
export default SplashArrow