import React, { FC, useContext } from 'react'
import StyledRoot from '../../Components/StyledRoot';
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import VideoPlayerComponent from '../../Components/video_player/VideoPlayerComponent';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import { colors } from '../../Utils/theme/colors';

const GoalSplashInitial: FC<Props> = ({ navigation }) => {
  const { onboardingVideoUrls} = useContext(AppContext)
  return (
    <StyledRoot
      enableScroll={false}
      useScrollFlex
      style={{ paddingHorizontal: 0, backgroundColor: colors.balticSea }}
      safeAreaStyle={{ backgroundColor: colors.balticSea }}
    >
      <VideoPlayerComponent
        onContinue={() => navigation.navigate('Goals')}
        headerText={'What is your specific desired outcome ?'}
        footerText={'Set  better goals'}
        sourceUrl={onboardingVideoUrls?.GoalSplashInitial}
      />
    </StyledRoot>
  )
}

export default GoalSplashInitial