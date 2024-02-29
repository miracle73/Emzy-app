import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ActivityNotificationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#D2B000"
      fillRule="evenodd"
      d="M9 1a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 2.237 5.7l-.221 3.534a7.377 7.377 0 0 1-1.308 3.754 1.617 1.617 0 0 0 1.135 2.529l3.407.408V17a2.75 2.75 0 1 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.135-2.528 7.376 7.376 0 0 1-1.308-3.754l-.221-3.533A4.214 4.214 0 0 0 9.557 1.75H9V1ZM6.443 3.25a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183 8.877 8.877 0 0 1-1.573-4.516l-.221-3.534A2.714 2.714 0 0 0 9.557 3.25H6.443ZM8 18.25c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V17c0 .69-.56 1.25-1.25 1.25Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ActivityNotificationIcon
