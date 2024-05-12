import React, { FC, useContext, useEffect } from 'react'
import StyledRoot from '../../Components/StyledRoot';
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import VideoPlayerComponent from '../../Components/video_player/VideoPlayerComponent';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import { colors } from '../../Utils/theme/colors';
import { useOnboardingService } from '../SignUp/onBoardingService';


const DesireSplashInitial: FC<Props> = ({ navigation }) => {
  const { onboardingVideoUrls, signupToken } = useContext(AppContext)
  const [markWatched, isMarking, status] = useOnboardingService()

  useEffect(() => { markWatched({ token: signupToken, videoId: 1 }) }, [])
  return (
    <StyledRoot
      enableScroll={false}
      useScrollFlex
      style={{ paddingHorizontal: 0, backgroundColor: colors.balticSea }}
      safeAreaStyle={{ backgroundColor: colors.balticSea }}
    >
      <VideoPlayerComponent
        onContinue={() => navigation.navigate('Desires')}
        headerText={'Let’s start with your top desired outcome'}
        footerText={'How to identify what you want'}
        sourceUrl={onboardingVideoUrls?.DesireSplashInitial}
      />
    </StyledRoot>
  )
}

export default DesireSplashInitial