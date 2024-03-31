import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC, } from 'react'
import { colors } from '../../Utils/theme/colors'
import BackArrow from '../../Images/SignUp/BackArrow'

interface Props {
    centerTitle?: string,
    onBackPress: () => void,
    style?: object,
    showBackArrow?: boolean,
    centerTitlestyle?: object,
    RightComponent?: any
}
const SecondaryHeader: FC<Props> = ({ centerTitle, onBackPress = () => { }, style, centerTitlestyle, showBackArrow = true, RightComponent = () => { } }) => {
    return (
        <View style={[styles.root, style]}>
            {showBackArrow ?
                <TouchableOpacity style={styles.backVew} onPress={onBackPress} activeOpacity={0.7}>
                    <BackArrow />
                </TouchableOpacity>
                :
                <View />
            }
            <Text style={[styles.title, centerTitlestyle]}>{centerTitle}</Text>
            <View>
                {RightComponent ?
                    <RightComponent />
                    :
                    <View />
                }
            </View>
        </View>
    )
}

export default SecondaryHeader

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    title: {
        color: colors.cyanBlue,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
    },
    backVew: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
    }
})