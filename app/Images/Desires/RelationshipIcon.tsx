import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const RelationshipIcon = (props: any) => (
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
      d="M18.3 15.938c-2.086 0-3.863 1.559-3.863 3.584 0 1.398.655 2.574 1.522 3.548.864.971 1.979 1.787 2.987 2.469l1.739 1.177c.19.129.44.129.63 0l1.74-1.177c1.007-.683 2.122-1.498 2.986-2.469.867-.974 1.521-2.15 1.521-3.548 0-2.025-1.776-3.584-3.862-3.584-1.075 0-2.021.504-2.7 1.156-.679-.652-1.625-1.157-2.7-1.157Z"
    />
  </Svg>
)
export default RelationshipIcon
