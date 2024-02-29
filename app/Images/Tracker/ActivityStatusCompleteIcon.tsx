import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ActivityStatusCompleteIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#3CC13B"
      d="M24 12.517c0 6.628-5.373 12-12 12s-12-5.372-12-12c0-6.627 5.373-12 12-12s12 5.373 12 12Zm-22.2 0c0 5.633 4.567 10.2 10.2 10.2 5.633 0 10.2-4.567 10.2-10.2 0-5.633-4.567-10.2-10.2-10.2-5.633 0-10.2 4.567-10.2 10.2Z"
    />
    <Path
      fill="#3CC13B"
      fillRule="evenodd"
      d="M14.743 10.179a.848.848 0 0 1 1.041 0 .539.539 0 0 1 .01.854l-3.92 4.06a.848.848 0 0 1-1.06.017l-2.598-2.153a.54.54 0 0 1 0-.863.848.848 0 0 1 1.041 0l2.056 1.703 3.41-3.6a.213.213 0 0 1 .02-.018Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ActivityStatusCompleteIcon
