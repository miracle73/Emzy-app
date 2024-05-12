import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const IncompleteTaskIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#F3BB1C"
      d="M24 12A12 12 0 1 1 9.603.242l.36 1.764A10.2 10.2 0 1 0 22.2 12H24Z"
    />
    <Path
      fill="#F3BB1C"
      fillRule="evenodd"
      d="M14.743 9.216a.737.737 0 0 1 1.052 1.03l-3.92 4.901a.736.736 0 0 1-1.06.02l-2.6-2.598a.737.737 0 0 1 1.042-1.042l2.056 2.056 3.41-4.345a.244.244 0 0 1 .02-.022Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default IncompleteTaskIcon