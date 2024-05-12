import React, { FC } from 'react'
import StyledRoot from '../../Components/StyledRoot';
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import VideoPlayerComponent from '../../Components/video_player/VideoPlayerComponent';


const IdentitySplashInitial: FC<Props> = ({ navigation }) => {

  return (
    <StyledRoot
      enableScroll={false}
      useScrollFlex
      style={{ paddingHorizontal: 0 }}
      safeAreaStyle={{ backgroundColor: '#474137' }}
    >
      <VideoPlayerComponent
        onContinue={() => navigation.navigate('Identity')}
        headerText={'My Success Identity'}
        footerText={'What do you need to be to achieve this outcome'}
      />
    </StyledRoot>
  )
}

export default IdentitySplashInitial