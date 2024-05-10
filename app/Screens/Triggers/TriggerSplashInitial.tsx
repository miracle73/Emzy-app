import React, { FC, useContext, useEffect } from 'react'
import StyledRoot from '../../Components/StyledRoot';
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import VideoPlayerComponent from '../../Components/video_player/VideoPlayerComponent';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import { colors } from '../../Utils/theme/colors';
import { useOnboardingService } from '../SignUp/onBoardingService';

const TriggerSplashInitial: FC<Props> = ({ navigation }) => {
  const { onboardingVideoUrls, signupToken } = useContext(AppContext)

  const [markWatched, isMarking, status] = useOnboardingService()

  useEffect(() => { markWatched({ token: signupToken, videoId: 3 }) }, [])

  return (
    <StyledRoot
      enableScroll={false}
      useScrollFlex
      style={{ paddingHorizontal: 0, backgroundColor: colors.balticSea }}
      safeAreaStyle={{ backgroundColor: colors.balticSea }}
    >
      <VideoPlayerComponent
        onContinue={() => navigation.navigate('Triggers')}
        headerText={'Triggers'}
        footerText={'What is Kryptonite ?'}
        sourceUrl={onboardingVideoUrls?.TriggerSplashInitial}
      />
    </StyledRoot>
  )
}

export default TriggerSplashInitial