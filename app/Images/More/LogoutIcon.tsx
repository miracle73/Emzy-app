import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const LogoutIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#FEEEEA" rx={12} />
    <Path
      stroke="#ED6A5A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.933 17.04c.207-2.4 1.44-3.38 4.14-3.38h.087c2.98 0 4.173 1.194 4.173 4.174v4.346c0 2.98-1.193 4.174-4.173 4.174h-.087c-2.68 0-3.913-.967-4.133-3.327M22 20h-7.587M15.9 17.767 13.667 20l2.233 2.233"
    />
  </Svg>
)
export default LogoutIcon
