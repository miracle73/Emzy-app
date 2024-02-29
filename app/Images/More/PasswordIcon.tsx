import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const PasswordIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#F8F8F8" rx={12} />
    <Path
      fill="#191716"
      d="M20 23.567a1.087 1.087 0 1 0 0-2.174 1.087 1.087 0 0 0 0 2.174Z"
    />
    <Path
      fill="url(#a)"
      d="M24.187 18.353v-.833c0-1.8-.434-4.187-4.187-4.187s-4.187 2.387-4.187 4.187v.833c-1.866.233-2.48 1.18-2.48 3.507v1.24c0 2.733.834 3.566 3.567 3.566h6.2c2.733 0 3.567-.833 3.567-3.566v-1.24c0-2.327-.614-3.274-2.48-3.507ZM20 24.493a2.016 2.016 0 0 1-2.013-2.013c0-1.114.906-2.014 2.013-2.014a2.02 2.02 0 0 1 2.013 2.014c0 1.113-.9 2.013-2.013 2.013Zm-3.1-6.2h-.153v-.773c0-1.954.553-3.254 3.253-3.254s3.253 1.3 3.253 3.254v.78H16.9v-.007Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20}
        x2={20}
        y1={13.333}
        y2={26.666}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E7CD9" />
        <Stop offset={0.826} stopColor="#4C8AE8" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default PasswordIcon
