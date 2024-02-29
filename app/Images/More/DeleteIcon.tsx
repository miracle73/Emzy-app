import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const DeleteIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#FEEEEA" rx={12} />
    <Path
      fill="#ED6A5A"
      d="M16 16.666v8.333a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8.333h-8Z"
    />
    <Path
      fill="#ED6A5A"
      fillRule="evenodd"
      d="M21.333 14.333V14a.667.667 0 0 0-.666-.667h-1.334a.667.667 0 0 0-.666.667v.333h-3a.333.333 0 0 0-.334.333V15c0 .184.15.333.334.333h8.666c.184 0 .334-.15.334-.333v-.334a.333.333 0 0 0-.334-.333h-3Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DeleteIcon
