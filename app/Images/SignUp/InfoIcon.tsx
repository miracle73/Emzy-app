import * as React from "react"
import Svg, { Path } from "react-native-svg"
const InfoIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#767676"
      d="M8.833 8.833H7.167v-5h1.666v5ZM7.167 10.5h1.666v1.667H7.167V10.5Zm3.941-10H4.892L.5 4.892v6.216L4.892 15.5h6.216l4.392-4.392V4.892L11.108.5Z"
    />
  </Svg>
)
export default InfoIcon
