import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const EmotionalStrengthIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Rect
      width={41.8}
      height={41.8}
      x={0.1}
      y={0.1}
      stroke="#71717A"
      strokeWidth={0.2}
      rx={7.9}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.938 21a4.313 4.313 0 0 1 8.1-2.063h6.712c.725 0 1.313.588 1.313 1.313v1.875c0 .31-.252.563-.563.563h-1.688V24c0 .31-.251.563-.562.563h-1.875a.562.562 0 0 1-.563-.563v-1.313H21.22A4.314 4.314 0 0 1 12.938 21Zm4.312-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default EmotionalStrengthIcon
