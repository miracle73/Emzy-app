import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HitGoalIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#D2B000"
      fillRule="evenodd"
      d="M17.07 5.2a2.6 2.6 0 1 0-2.6-2.6 2.59 2.59 0 0 0 2.6 2.6Zm0-3.69a1.1 1.1 0 1 1-1.1 1.09 1.09 1.09 0 0 1 1.1-1.09Z"
      clipRule="evenodd"
    />
    <Path
      fill="#D2B000"
      d="M18.64 5.98a.75.75 0 0 0-.75.75v8a3.55 3.55 0 0 1-3.54 3.54H5a3.55 3.55 0 0 1-3.54-3.54V5.34A3.55 3.55 0 0 1 5 1.8h7.92a.75.75 0 0 0 0-1.5H5a5 5 0 0 0-5 5v9.35a5 5 0 0 0 5 5h9.35a5 5 0 0 0 5-5v-8a.76.76 0 0 0-.71-.67Z"
    />
    <Path
      fill="#D2B000"
      fillRule="evenodd"
      d="M6.7 5.43a5.05 5.05 0 0 1 4.56-.73 5.25 5.25 0 0 1 3.09 2.8 5.93 5.93 0 0 1 .5 3.54 2.42 2.42 0 0 1-1.68 1.94 2.33 2.33 0 0 1-2.17-.46 2.71 2.71 0 0 1-1.41.4 2.998 2.998 0 0 1-.72-.1 2.88 2.88 0 0 1-1.86-3.61 3 3 0 0 1 2.77-2.19 2.55 2.55 0 0 1 .72.1 2.87 2.87 0 0 1 1.85 3.61 3.359 3.359 0 0 1-.3.7.84.84 0 0 0 .71.09.91.91 0 0 0 .63-.75 4.46 4.46 0 0 0-.37-2.64 3.75 3.75 0 0 0-2.21-2 3.53 3.53 0 0 0-3.23.51 4.19 4.19 0 0 0-1.68 3.38 3.93 3.93 0 0 0 3.76 4.06.75.75 0 0 1 .74.76.74.74 0 0 1-.75.74 5.44 5.44 0 0 1-5.25-5.56 5.67 5.67 0 0 1 2.3-4.59Zm2.57 5.96c.103.014.207.014.31 0a1.25 1.25 0 0 0 .68-.23c.337-.203.58-.53.68-.91a1.54 1.54 0 0 0-.1-1.14 1.19 1.19 0 0 0-.72-.62 1.76 1.76 0 0 0-.31 0 1.42 1.42 0 0 0-1.36 1.15 1.37 1.37 0 0 0 .82 1.75Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default HitGoalIcon
