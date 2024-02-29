import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const TrackerMessageIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={34} cy={30} r={30} fill="#D2B000" />
    </G>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M30.875 17.775c.85-.183 1.718-.275 2.587-.275a12.012 12.012 0 0 1 11.963 13.625c-.75 5.75-6.425 10.4-12.225 10.4h-8.325a2.013 2.013 0 0 1-1.775-2.962l.337-.65a1.987 1.987 0 0 0-.062-1.988 12 12 0 0 1 7.5-18.15ZM33.1 39.638c5.096-.08 9.43-3.74 10.362-8.75a10 10 0 0 0-2.387-8.05 10.125 10.125 0 0 0-7.613-3.463c-.739.002-1.476.077-2.2.225a10.138 10.138 0 0 0-6.375 15.3c.748 1.175.8 2.663.138 3.888l-.338.637a.125.125 0 0 0 0 .138c.05.075.125.075.125.075H33.1Z"
      clipRule="evenodd"
    />
    <Defs></Defs>
  </Svg>
)
export default TrackerMessageIcon
