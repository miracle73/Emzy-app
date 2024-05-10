import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { width } from '../../Utils/utility_functions/utilityFunctions';
import { VideoConstantsData } from '../../Utils/data_models/dataTypes';
import { colors } from '../../Utils/theme/colors';
import { Vimeo } from 'react-native-vimeo-iframe'

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

const RenderItem = ({ item, onPress }: { item: VideoConstantsData, onPress: any }) => {

    return (
        <TouchableOpacity onPress={() => { onPress() }} style={{flex:1 }}>
            <Vimeo
                videoId={formatVideoUrl(item.video_link ?? "")}
                handlers={videoCallbacks}
                params={''}
            />
        </TouchableOpacity>
    )
}

const DashboardCarousel = ({ data }: { data: Array<VideoConstantsData> }) => {
    const [paused, setPaused] = useState(true)
    return (
        <View style={{ height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.balticSea, borderRadius: 8 }}>
            <Carousel
                loop
                width={width * 0.9}
                height={width / 1.8}
                autoPlay={paused}
                data={data}
                scrollAnimationDuration={5000}
                renderItem={({ item }) => (<RenderItem item={item} onPress={() => setPaused((val) => !val)} />)}
                pagingEnabled={true}
                snapEnabled={true}
                mode={'parallax'}
                modeConfig={{
                    parallaxScrollingScale: 0.95,
                    parallaxScrollingOffset: 70,
                }}
            />
        </View>
    );
}

export default DashboardCarousel

const styles = StyleSheet.create({})