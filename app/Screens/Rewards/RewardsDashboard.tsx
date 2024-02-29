import { Slider } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import DopamineCoinIcon from '../../Images/Dashboard/DopamineCoinIcon'
import RewardGiftIcon from '../../Images/Rewards/RewardGiftIcon'
import SendIcon from '../../Images/Rewards/SendIcon'
import WithdrawIcon from '../../Images/Rewards/WithdrawIcon'
import { RewardsCardContainer, RewardsCardHeaderContainer, RewardsCardHeaderTitle, RewardsCardWrapper, RewardsClaimButton, RewardsClaimButtonTitle, RewardsDashboardActionContainer, RewardsDashboardActionTitle, RewardsDashboardActionWrapper, RewardsDashboardBalance, RewardsDashboardBalanceContainer, RewardsDashboardBalanceTitle, RewardsDashboardBalanceWrapper, RewardsDashboardBodyContainer, RewardsDashboardBodyTitle, RewardsDashboardBodyWrapper, RewardsDashboardContainer, RewardsDashboardHeaderContainer } from './Rewards.styled'

const RewardsDashboard = () => {
  return (
    <RewardsDashboardContainer>
      <RewardsDashboardHeaderContainer>
        <RewardsDashboardBalanceContainer>
          <RewardsDashboardBalanceWrapper>
            <DopamineCoinIcon />
            <RewardsDashboardBalance>5,000</RewardsDashboardBalance>
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
      </RewardsDashboardHeaderContainer>
      <RewardsDashboardBodyContainer>
        <RewardsDashboardBodyTitle>Rewards</RewardsDashboardBodyTitle>
        <RewardsDashboardBodyWrapper contentContainerStyle={{paddingBottom: 40}}>
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
                  <Slider.FilledTrack/>
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
                  <Slider.FilledTrack/>
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
                  <Slider.FilledTrack/>
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
                  <Slider.FilledTrack/>
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
                  <Slider.FilledTrack/>
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
                  <Slider.FilledTrack/>
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
                  <Slider.FilledTrack/>
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
                  <Slider.FilledTrack/>
                </Slider.Track>
              </Slider>
            </RewardsCardWrapper>
          </RewardsCardContainer>
        </RewardsDashboardBodyWrapper>
      </RewardsDashboardBodyContainer>
    </RewardsDashboardContainer>
  )
}

export default RewardsDashboard