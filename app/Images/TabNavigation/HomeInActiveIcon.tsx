import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeInActiveIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#C7CBD1"
      d="M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2ZM7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z"
    />
    <Path
      fill="#F3F5F9"
      d="M6.29 10.58a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58ZM17.71 22a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58Z"
    />
  </Svg>
)
export default HomeInActiveIcon
