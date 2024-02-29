import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RightCornerIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M.97.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4A.75.75 0 0 1 .97 8.47L4.44 5 .97 1.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default RightCornerIcon
