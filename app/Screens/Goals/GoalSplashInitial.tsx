  import React, { FC } from 'react'
import StyledRoot from '../../Components/StyledRoot';
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import VideoPlayerComponent from '../../Components/video_player/VideoPlayerComponent';


const GoalSplashInitial: FC<Props> = ({ navigation }) => {

  return (
    <StyledRoot
      enableScroll={false}
      useScrollFlex
      style={{ paddingHorizontal: 0 }}
      safeAreaStyle={{ backgroundColor: '#474137' }}
    >
      <VideoPlayerComponent
        onContinue={() => navigation.navigate('Goals')}
        headerText={'What is your specific desired outcome ?'}
        footerText={'Set  better goals'}
      />
    </StyledRoot>
  )
}

export default GoalSplashInitial