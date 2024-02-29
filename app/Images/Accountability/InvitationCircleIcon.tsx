import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const InvitationCircleIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <Circle cx={36} cy={36} r={35} stroke="#3CC13B" strokeWidth={2} />
    <Path
      fill="#3CC13B"
      d="m24.85 27.933 15.033-5.016c6.75-2.25 10.417 1.433 8.184 8.183L43.05 46.133c-3.367 10.117-8.9 10.117-12.267 0L29.3 41.667l-4.467-1.483c-10.1-3.35-10.1-8.867.017-12.25Z"
      opacity={0.4}
    />
    <Path fill="#292D32" d="m33.2 37.383 6.35-6.366-6.35 6.366Z" />
    <Path
      fill="#3CC13B"
      d="M33.2 38.633c-.317 0-.633-.116-.883-.366a1.257 1.257 0 0 1 0-1.767l6.333-6.366a1.257 1.257 0 0 1 1.767 0 1.257 1.257 0 0 1 0 1.766l-6.334 6.367a1.31 1.31 0 0 1-.883.366Z"
    />
  </Svg>
)
export default InvitationCircleIcon
