import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const HealthIcon = (props: any) => (
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
      d="M22.365 14.25a.375.375 0 0 0-.635-.27l-1.333 1.282a26.661 26.661 0 0 0-4.973 6.537.375.375 0 0 0 .326.56h3.233v5.391a.375.375 0 0 0 .627.277l.597-.543a26.626 26.626 0 0 0 5.25-6.585l.37-.653a.375.375 0 0 0-.327-.56h-3.135V14.25Z"
    />
  </Svg>
)
export default HealthIcon
