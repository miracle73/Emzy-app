import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CrossIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <Path stroke="#585858" strokeWidth={1.5} d="m1 7 6-6m0 6L1 1" />
  </Svg>
)
export default CrossIcon
