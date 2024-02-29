import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MoreInActiveIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#C7CBD1"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      opacity={0.4}
    />
    <Path
      fill="#C7CBD1"
      d="M12 10.31a1.31 1.31 0 1 0 0-2.62 1.31 1.31 0 0 0 0 2.62ZM8.31 13.69C7.59 13.69 7 14.28 7 15c0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31ZM15.69 13.69c-.72 0-1.31.59-1.31 1.31 0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31Z"
      opacity={0.97}
    />
  </Svg>
)
export default MoreInActiveIcon
