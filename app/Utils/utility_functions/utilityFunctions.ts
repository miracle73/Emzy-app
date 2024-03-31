import { Dimensions } from "react-native"


const dimensions = Dimensions.get('window')
export const height = dimensions.height
export const width = dimensions.width


export interface Props {
    navigation?: any,
    route?: any
}