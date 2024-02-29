import * as React from "react"
import Svg, { Path } from "react-native-svg"
const InvitationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2.252 6.975 11.66-5.552c1.7-.81 3.474.965 2.665 2.666l-5.552 11.659c-.759 1.593-3.059 1.495-3.679-.158L6.32 12.851a2 2 0 0 0-1.17-1.17l-2.74-1.027c-1.652-.62-1.75-2.92-.157-3.679Z"
    />
  </Svg>
)
export default InvitationIcon
