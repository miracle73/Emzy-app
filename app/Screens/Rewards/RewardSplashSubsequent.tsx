import React, { FC } from 'react'
import StyledRoot from '../../Components/StyledRoot';
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import VideoPlayerComponent from '../../Components/video_player/VideoPlayerComponent';


const RewardSplashSubsequent: FC<Props> = ({ navigation }) => {

  return (
    <StyledRoot
      enableScroll={false}
      useScrollFlex
      style={{ paddingHorizontal: 0 }}
      safeAreaStyle={{ backgroundColor: '#474137' }}
    >
      <VideoPlayerComponent
        onContinue={() => navigation.navigate('Rewards')}
        headerText={'My Reward'}
        footerText={'Get that Dopamine!'}
      />
    </StyledRoot>
  )
}

export default RewardSplashSubsequent