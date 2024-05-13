import React, { FC, useContext } from 'react'
import StyledRoot from '../../Components/StyledRoot';
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import VideoPlayerComponent from '../../Components/video_player/VideoPlayerComponent';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import { colors } from '../../Utils/theme/colors';

const MetricSplashInitial: FC<Props> = ({ navigation }) => {
  const { onboardingVideoUrls } = useContext(AppContext)
  console.log(onboardingVideoUrls)
  return (
    <StyledRoot
      enableScroll={false}
      useScrollFlex
      style={{ paddingHorizontal: 0, backgroundColor: colors.balticSea }}
      safeAreaStyle={{ backgroundColor: colors.balticSea }}
    >
      <VideoPlayerComponent
        onContinue={() => navigation.navigate('Metrics')}
        headerText={'Success Metrics'}
        footerText={'Explanation of success criteria'}
        sourceUrl={onboardingVideoUrls?.MetricSplashInitial}
      />
    </StyledRoot>
  )
}

export default MetricSplashInitial