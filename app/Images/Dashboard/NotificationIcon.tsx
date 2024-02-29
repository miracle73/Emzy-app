import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const NotificationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#fff" />
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M21.071 17.32a1.334 1.334 0 0 1-.467-1.013v-3.213c0-2.634-2.386-4.76-5.333-4.76s-5.333 2.126-5.333 4.76v3.213c0 .39-.17.76-.467 1.013-1.007.9-.293 2.433 1.133 2.433h2.534a2.267 2.267 0 0 0 4.266 0h2.534c1.426 0 2.14-1.533 1.133-2.433Zm-5.8 2.933a1.287 1.287 0 0 1-1.013-.5h2a1.267 1.267 0 0 1-.987.5Zm4.673-1.5a.587.587 0 0 0 .58-.326.3.3 0 0 0-.113-.36 2.394 2.394 0 0 1-.8-1.76v-3.213c0-2.074-1.947-3.76-4.333-3.76-2.387 0-4.334 1.686-4.334 3.76v3.213a2.393 2.393 0 0 1-.8 1.76.3.3 0 0 0-.12.36.587.587 0 0 0 .58.326h9.34Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15.271}
        x2={15.271}
        y1={8.334}
        y2={21.254}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default NotificationIcon
