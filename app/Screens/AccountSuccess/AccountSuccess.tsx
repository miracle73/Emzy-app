import React, { FC, useContext, useEffect } from 'react'
import AppAuthSuccess from '../../Components/AppAuthSuccess/AppAuthSuccess'
import { AccountSuccessContainer } from './AccountSuccess.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { useDashboardVideoConstants } from '../Dashboard/dashboardService'
import { AppContext } from '../../data_storage/contextApi/AppContext'

const AccountSuccess: FC<Props> = ({ navigation }) => {
  const { signupToken, setOnboardingVideoUrls, onboardingVideoUrls } = useContext(AppContext)
  const [videoConstants, refetchVideoConstants, isRefetchingVideoConstants] = useDashboardVideoConstants(signupToken)

  const toContinue = () => {

    if (videoConstants?.length > 0) {
      setOnboardingVideoUrls({
        DesireSplashInitial: videoConstants[0]?.video_link,
        IdentitySplashInitial: videoConstants[1]?.video_link,
        TriggerSplashInitial: videoConstants[2]?.video_link,
        CommitmentSplashInitial: videoConstants[3]?.video_link,
        MetricSplashInitial: videoConstants[4]?.video_link,
        GoalSplashInitial: videoConstants[0]?.video_link,
        AccountabilityManagerSplashInitial: videoConstants[0]?.video_link,
        RewardSplashSubsequent: videoConstants[0]?.video_link,
        AccountabilitySplashInitial: videoConstants[0]?.video_link
      })
      navigation.replace('OnboardingKnowledge')
    } else {
      refetchVideoConstants()
    }
  }

  useEffect(() => {
    refetchVideoConstants()
  }, [])
  return (
    <AccountSuccessContainer>
      <AppAuthSuccess
        title={'Account created'}
        description={'Your account has been successfully created'}
        onPress={() => {
          toContinue()
        }}
        buttonLabel={isRefetchingVideoConstants ? 'Please wait...' : 'Continue'}
        disabled={isRefetchingVideoConstants as boolean}
      />
    </AccountSuccessContainer>
  )
}

export default AccountSuccess