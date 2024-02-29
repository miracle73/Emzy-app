import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const AddMemberIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Circle
      cx={25}
      cy={25}
      r={24.5}
      fill="#EDEDED"
      stroke="#A1A1AA"
      strokeDasharray="3 3"
    />
    <Path
      fill="#A1A1AA"
      d="M31.75 24H24.5v-7.25a.75.75 0 0 0-1.5 0V24h-7.25a.75.75 0 0 0 0 1.5H23v7.25a.75.75 0 0 0 1.5 0V25.5h7.25a.75.75 0 0 0 0-1.5Z"
    />
  </Svg>
)
export default AddMemberIcon

