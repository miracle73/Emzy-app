import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DownloadIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#767676"
      fillRule="evenodd"
      d="M15.5 3.417a1.6 1.6 0 0 0-.383-1.059l-1.159-1.4A1.21 1.21 0 0 0 13 .5H3c-.392 0-.733.175-.967.458l-1.15 1.4A1.6 1.6 0 0 0 .5 3.417v10.416A1.666 1.666 0 0 0 2.167 15.5h11.666a1.666 1.666 0 0 0 1.667-1.667V3.417Zm-1.775-1.25H2.267l.675-.834h10l.783.834Zm-1.142 5.416L8 12.167 3.417 7.583h2.916V5.917h3.334v1.666h2.916Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DownloadIcon