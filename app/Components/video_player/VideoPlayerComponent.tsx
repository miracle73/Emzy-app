import React, { useState } from 'react'
import Video from 'react-native-video';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { height } from '../../Utils/utility_functions/utilityFunctions';
import { colors } from '../../Utils/theme/colors';


const VideoPlayerComponent = ({ sourceUrl, onContinue, headerText, footerText, buttonText = 'Continue' }:
    { sourceUrl?: string, onContinue: () => {}, headerText?: string, footerText?: string, buttonText?: string }) => {
    const [paused, setPaused] = useState<boolean>(false)
    const [showContinueButton, setShowContinueButton] = useState<boolean>(true)

    const handleChangePaused = () => {
        setPaused(!paused)
    }

    return (
        <>
            <Text style={styles.upperText}>
                {headerText}
            </Text>
            <Video
                source={sourceUrl ? { uri: sourceUrl } : require('../../Video/HotPicksVideo.mp4')}
                style={styles.video}
                resizeMode="cover"
                paused={paused}
                repeat = {false}
                onTouchStart={() => handleChangePaused()}
                onEnd={() => { setShowContinueButton(true) }}
                poster={'https://legacy.reactjs.org/logo-og.png'}
            />
            <Text style={[styles.downText, showContinueButton && { bottom: 200 }]}>
                {footerText}
            </Text>
            {
                showContinueButton == true &&
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        handleChangePaused()
                        setTimeout(() => { onContinue() }, 400)
                    }}
                    activeOpacity={0.5}>
                    <Text style={styles.continue}>
                        {buttonText}
                    </Text>
                </TouchableOpacity>
            }
        </>
    )
}

export default VideoPlayerComponent

const styles = StyleSheet.create({
    video: {
        height: height,
        width: '100%',
        borderRadius: 0,
        backgroundColor: 'transparent'
    },
    upperText: {
        position: 'absolute',
        zIndex: 1000,
        top: 35,
        color: colors.white,
        fontFamily: 'Nunito Regular',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
        width: '60%',
        textAlign: 'center'
    },
    downText: {
        position: 'absolute',
        zIndex: 1000,
        bottom: 150,
        color: colors.white,
        fontFamily: 'Nunito Regular',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
        textAlign: 'center'
    },
    btn: {
        position: 'absolute',
        zIndex: 1000,
        bottom: 105,
        backgroundColor: '#3E7CD9',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        paddingHorizontal: 100,
        paddingVertical: 15
    },
    continue: {
        color: colors.white,
        fontFamily: 'Montserrat Regular',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
    }
})