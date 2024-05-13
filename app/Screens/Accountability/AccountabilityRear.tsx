import React, { FC, useEffect, useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AccountabilityRearBodyTitle, AccountabilityRearBodyTitleSpan, AccountabilityRearContainer, AccountabilityRearFooterContainer, AccountabilityRearFooterTitle, AccountabilityRearHeaderContainer, Icon } from './Accountability.styled'
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { useMutation } from '@tanstack/react-query'
import { setAGoal, inviteAccountabilityPartner } from '../../Utils/network_service/NetworkServices'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'
import { colors } from '../../Utils/theme/colors'
import { View } from 'native-base'
import BackArrow from '../../Images/SignUp/BackArrow'
import { AccountabilityBackContainer } from './Accountability.styled'

const AccountabilityRear: FC<Props> = ({ navigation }) => {
  const { goalObject, userLoginData, signupInProgress, signupToken } = useContext(AppContext)


  const { mutate, isLoading } = useMutation(setAGoal, {
    onSuccess: (data: any) => {
      if (data?.data?.status == 'success') {
        if (goalObject?.emoAccountabilityPartner == true) {
          invitePartner({ token: signupInProgress ? signupToken : userLoginData?.data?.access ?? '', email: goalObject?.accountabilityPartnerEmail, goalId: data?.data?.data?.id })
        } else {
          displayToast('success', 'SUCCESS', data?.data?.message)
          setTimeout(() => {
            if (signupInProgress) {
              navigation.replace('LoginStack')
            } else {
              navigation.replace('TabNavigation', { screen: 'Home' })
            }
          }, 3000)
        }
      } else {
        displayToast('error', 'ERROR', data?.data?.message)
        return
      }
    },
    onError: (err: any) => {
      console.log(err.response?.data)
      displayToast('error', 'ERROR', 'Goal setting has failed. Please try again')
    },
  });


  const { mutate: invitePartner, isLoading: isInvitingPartner } = useMutation(inviteAccountabilityPartner, {
    onSuccess: (data: any) => {
      if (data?.data?.status == 'success') {
        console.log(data?.data, '  invitation')
        displayToast('success', 'SUCCESS', 'Goal successfuly set')
        // setTimeout(() => { navigation.replace('TabNavigation', { screen: 'Home' }) }, 3000)
        setTimeout(() => {
          if (signupInProgress) {
            navigation.replace('LoginStack')
          } else {
            navigation.replace('TabNavigation', { screen: 'Home' })
          }
        }, 3000)
      } else {
        displayToast('success', 'SUCCESS', 'Goal successfuly set')
        // setTimeout(() => { navigation.replace('TabNavigation', { screen: 'Home' }) }, 3000)
        setTimeout(() => {
          if (signupInProgress) {
            navigation.replace('LoginStack')
          } else {
            navigation.replace('TabNavigation', { screen: 'Home' })
          }
        }, 3000)
      }
    },
    onError: (err: any) => {
      displayToast('success', 'SUCCESS', 'Goal successfuly set')
      // setTimeout(() => {
      //   navigation.replace('TabNavigation', { screen: 'Home' })
      // }, 3000)
      setTimeout(() => {
        if (signupInProgress) {
          navigation.replace('LoginStack')
        } else {
          navigation.replace('TabNavigation', { screen: 'Home' })
        }
      }, 3000)
      console.log(err.response?.data)
      // displayToast('error', 'ERROR', 'Goal setting has failed. Please try again')
    },
  });

  useEffect(() => {
    mutate({ token: signupInProgress ? signupToken ?? '' : userLoginData?.data?.access ?? '', goalObject: goalObject ?? {} })
  }, [])

  return (
    <LinearGradient
      colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <AccountabilityRearContainer>
        <AccountabilityRearHeaderContainer source={require('../../Images/Accountability/grids_frame.png')} resizeMode={'contain'} />
        <AccountabilityRearBodyTitle>Generating <AccountabilityRearBodyTitleSpan>Your</AccountabilityRearBodyTitleSpan> Future <AccountabilityRearBodyTitleSpan>Self</AccountabilityRearBodyTitleSpan></AccountabilityRearBodyTitle>
        <AccountabilityRearFooterContainer>
          <AccountabilityRearFooterTitle>Hold on a second while we setup your dashboard</AccountabilityRearFooterTitle>
          {(isLoading || isInvitingPartner) &&
            <View style={{ padding: 20 }}>
              <LoadingIndicator color={colors.vividRed} size={'large'} />
            </View>
          }
        </AccountabilityRearFooterContainer>
      </AccountabilityRearContainer>
    </LinearGradient>
  )
}

export default AccountabilityRear
