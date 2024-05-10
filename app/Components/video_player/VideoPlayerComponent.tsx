import React, { useState, useRef, useEffect } from 'react'
import Video from 'react-native-video';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { height } from '../../Utils/utility_functions/utilityFunctions';
import { colors } from '../../Utils/theme/colors';
import { Vimeo } from 'react-native-vimeo-iframe';
import { View } from 'native-base';

export const videoCallbacks = {
    timeupdate: (data: any) => { },
    play: (data: any) => { },
    pause: (data: any) => { },
    fullscreenchange: (data: any) => { },
    ended: (data: any) => { },
    controlschange: (data: any) => { },
};


const formatVideoUrl = (url: string) => {
    const formattedUrl = url?.replace("https://vimeo.com/", "")?.replace("?share=copy", "")
    return formattedUrl
}

const VideoPlayerComponent = ({ sourceUrl, onContinue, headerText, footerText, buttonText = 'Continue' }:
    { sourceUrl?: string, onContinue: () => {}, headerText?: string, footerText?: string, buttonText?: string }) => {
    const [paused, setPaused] = useState<boolean>(false)
    const [showContinueButton, setShowContinueButton] = useState<boolean>(true)
    const vimeoPlayerRef = useRef<any>(null);

    const handleChangePaused = () => {
        setPaused(!paused)
    }

    useEffect(() => {
        // Add event listener for video play event
        const player = vimeoPlayerRef.current?.$; // Access the Vimeo player object
        const handlePlay = () => {
            // Enter full screen mode when video starts playing
            vimeoPlayerRef.current?.webViewBridge?.postMessage('requestFullscreen');
        };

        const handleLoaded = () => {
            // Once the video is loaded, play it
            vimeoPlayerRef.current?.play();
          };

        if (player) {
          // Event listener for video play
          player.on('play', () => {
            player.requestFullscreen(); // Request fullscreen mode on play
          });
        }

        // Attach event listener
        vimeoPlayerRef.current?.addEventListener('play', handlePlay);
        vimeoPlayerRef.current?.addEventListener('loaded', handleLoaded);

        // Remove event listener on cleanup
        return () => {
            vimeoPlayerRef.current?.removeEventListener('play', handlePlay);
        };
     
    }, [])

    return (
        <>
            <Text style={styles.upperText}>
                {headerText}
            </Text>
            <View style={{ flex: 1, width: '100%', backgroundColor: colors.balticSea }}>

                <Vimeo
                    videoId={formatVideoUrl(sourceUrl ?? '')} //This is the link - https://vimeo.com/927160124?share=copy
                    handlers={{}}
                    params={''}
                    otherProps={{}}
                    ref={vimeoPlayerRef}
                />
            </View>
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
        bottom: 125,
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