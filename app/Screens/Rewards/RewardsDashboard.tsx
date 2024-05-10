import { Slider } from 'native-base'
import React, { useContext } from 'react'
import { Text } from 'react-native'
import DopamineCoinIcon from '../../Images/Dashboard/DopamineCoinIcon'
import RewardGiftIcon from '../../Images/Rewards/RewardGiftIcon'
import SendIcon from '../../Images/Rewards/SendIcon'
import WithdrawIcon from '../../Images/Rewards/WithdrawIcon'
import {
  RewardsCardContainer,
  RewardsCardHeaderContainer,
  RewardsCardHeaderTitle,
  RewardsCardWrapper,
  RewardsClaimButton,
  RewardsClaimButtonTitle,
  RewardsDashboardActionContainer,
  RewardsDashboardActionTitle,
  RewardsDashboardActionWrapper,
  RewardsDashboardBalance,
  RewardsDashboardBalanceContainer,
  RewardsDashboardBalanceTitle,
  RewardsDashboardBalanceWrapper,
  RewardsDashboardBodyContainer,
  RewardsDashboardBodyTitle,
  RewardsDashboardBodyWrapper,
  RewardsDashboardContainer,
  RewardsDashboardHeaderContainer
} from './Rewards.styled'
import StyledRoot from '../../Components/StyledRoot'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { formatDecimalAmount } from '../../Utils/utility_functions/utilityFunctions'

const RewardsDashboard = () => {
  const { userWholeDetails, userLoginData } = useContext(AppContext)

  return (
    <StyledRoot
      style={{ paddingRight: 0, paddingLeft: 0 }}
      Header={() => (
        <RewardsDashboardHeaderContainer>
          <RewardsDashboardBalanceContainer>
            <RewardsDashboardBalanceWrapper>
              <DopamineCoinIcon />
              <RewardsDashboardBalance>{formatDecimalAmount(String(userWholeDetails?.data?.wallet_balance ?? '0.0'))}</RewardsDashboardBalance>
            </RewardsDashboardBalanceWrapper>
            <RewardsDashboardBalanceTitle>Dopamine coin balance</RewardsDashboardBalanceTitle>
          </RewardsDashboardBalanceContainer>
          <RewardsDashboardActionContainer>
            <RewardsDashboardActionWrapper>
              <SendIcon />
              <RewardsDashboardActionTitle>Send</RewardsDashboardActionTitle>
            </RewardsDashboardActionWrapper>
            <RewardsDashboardActionWrapper>
              <WithdrawIcon />
              <RewardsDashboardActionTitle>Withdraw</RewardsDashboardActionTitle>
            </RewardsDashboardActionWrapper>
          </RewardsDashboardActionContainer>
          <RewardsDashboardBodyTitle>Rewards</RewardsDashboardBodyTitle>
        </RewardsDashboardHeaderContainer>
      )}
    >
      <RewardsDashboardContainer>

        <RewardsDashboardBodyContainer>

          <RewardsDashboardBodyWrapper contentContainerStyle={{ paddingBottom: 40 }}>
            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>

            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>

            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>

            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>

            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>

            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>

            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>

            <RewardsCardContainer>
              <RewardsCardWrapper>
                <RewardsCardHeaderContainer>
                  <RewardGiftIcon />
                  <RewardsCardHeaderTitle>lv1. 5 Free shopping vouchers</RewardsCardHeaderTitle>
                  <RewardsClaimButton>
                    <RewardsClaimButtonTitle>Claim</RewardsClaimButtonTitle>
                  </RewardsClaimButton>
                </RewardsCardHeaderContainer>
                <Slider defaultValue={70} size='lg'>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </RewardsCardWrapper>
            </RewardsCardContainer>
          </RewardsDashboardBodyWrapper>
        </RewardsDashboardBodyContainer>
      </RewardsDashboardContainer>
    </StyledRoot>
  )
}

export default RewardsDashboard