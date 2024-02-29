import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DeleteIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#767676"
      d="M11.833 1.333H8.917L8.083.5H3.917l-.834.833H.167V3h11.666V1.333ZM1 13.833A1.666 1.666 0 0 0 2.667 15.5h6.666A1.667 1.667 0 0 0 11 13.833v-10H1v10Z"
    />
  </Svg>
)
export default DeleteIcon
