import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ActivityGoalIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#3498DB"
      d="M17.44.46a.76.76 0 0 0-.69-.46h-5a.75.75 0 0 0 0 1.5h3.19L9.22 7.22a.75.75 0 0 0 1.06 1.06L16 2.56v3.19a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.06-.29Z"
    />
    <Path
      fill="#3498DB"
      d="M14.75 8a.76.76 0 0 0-.75.75v4A3.26 3.26 0 0 1 10.75 16h-6a3.26 3.26 0 0 1-3.25-3.25v-6A3.26 3.26 0 0 1 4.75 3.5h4a.75.75 0 0 0 0-1.5h-4A4.75 4.75 0 0 0 0 6.75v6a4.75 4.75 0 0 0 4.75 4.75h6a4.75 4.75 0 0 0 4.75-4.75v-4a.76.76 0 0 0-.75-.75Z"
    />
  </Svg>
)
export default ActivityGoalIcon
