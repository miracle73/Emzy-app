import React, { FC, useContext, useState } from 'react'
import { Switch } from 'react-native';
import BackArrow from '../../Images/SignUp/BackArrow'
import { NotificationSettingsLoginAttemptSwitchLabel, NotificationSettingsGoalsSwitchLabel } from '../../Utils/Consts/More';
import { Icon, NotificationSettingsBodyContainer, NotificationSettingsBodyLoginContainer, NotificationSettingsBodyLoginDescription, NotificationSettingsBodyLoginSwitchContainer, NotificationSettingsBodyLoginSwitchLabel, NotificationSettingsBodyLoginSwitchWrapper, NotificationSettingsBodyLoginTitle, NotificationSettingsContainer, NotificationSettingsHeaderContainer, NotificationSettingsHeaderTitle } from './More.styled'
import StyledRoot from '../../Components/StyledRoot'
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { setNotifications } from '../../Utils/network_service/NetworkServices';
import { useMutation } from '@tanstack/react-query';
import { AppContext } from '../../data_storage/contextApi/AppContext';


const NotificationSettings: FC<Props> = ({ navigation }) => {
  const { userLoginData } = useContext(AppContext)
  const [switchSettings, setSwitchSettings] = useState(
    {
      login: {
        push: true,
        email: true,
        sms: false
      },
      goal: {
        push: true,
        email: true,
        sms: false
      }
    })


  const { mutate, isLoading } = useMutation(setNotifications, {
    onSuccess: (data: any) => {
      console.log(data?.data)
      if (data?.data?.status == 'success') {
        displayToast('success', 'SUCCESS', data?.data?.message)
      } else {
        displayToast('error', 'ERROR', data?.data?.message)
        return
      }
    },
    onError: (err: any) => {
      displayToast('error', 'ERROR', 'Notifications settings update has failed.')
    },
  });



  return (
    <StyledRoot
      Header={() => (
        <NotificationSettingsHeaderContainer>
          <Icon onPress={() => navigation.goBack()}>
            <BackArrow />
          </Icon>
          <NotificationSettingsHeaderTitle>Notification settings</NotificationSettingsHeaderTitle>
        </NotificationSettingsHeaderContainer>
      )}
    >
      <NotificationSettingsContainer>
        <NotificationSettingsBodyContainer>
          <NotificationSettingsBodyLoginContainer>
            <NotificationSettingsBodyLoginTitle>Login attempts</NotificationSettingsBodyLoginTitle>
            <NotificationSettingsBodyLoginDescription>These are notifications to notify you when your account is being accessed</NotificationSettingsBodyLoginDescription>
            <NotificationSettingsBodyLoginSwitchContainer>
              {NotificationSettingsLoginAttemptSwitchLabel?.map((item) => {
                return (
                  <NotificationSettingsBodyLoginSwitchWrapper>
                    <NotificationSettingsBodyLoginSwitchLabel>{item}</NotificationSettingsBodyLoginSwitchLabel>
                    <Switch
                      onValueChange={() => {
                        setSwitchSettings((prev) => item == 'Email' ?
                          ({ ...prev, ...{ login: { ...prev.login, ...{ email: !prev.login.email } } } })
                          :
                          ({ ...prev, ...{ login: { ...prev.login, ...{ push: !prev.login.push } } } })
                        )
                        mutate({ token: userLoginData?.data?.access ?? '', notifications: switchSettings })
                      }}
                      value={item == 'Email' ? switchSettings?.login?.email : switchSettings?.login?.push}
                    />
                  </NotificationSettingsBodyLoginSwitchWrapper>
                )
              })}
            </NotificationSettingsBodyLoginSwitchContainer>
          </NotificationSettingsBodyLoginContainer>

          <NotificationSettingsBodyLoginContainer>
            <NotificationSettingsBodyLoginTitle>Your goals</NotificationSettingsBodyLoginTitle>
            <NotificationSettingsBodyLoginDescription>These are notifications to notify you when your goal is being accomplished</NotificationSettingsBodyLoginDescription>
            <NotificationSettingsBodyLoginSwitchContainer>
              {NotificationSettingsGoalsSwitchLabel?.map((item) => {
                return (
                  <NotificationSettingsBodyLoginSwitchWrapper>
                    <NotificationSettingsBodyLoginSwitchLabel>{item}</NotificationSettingsBodyLoginSwitchLabel>
                    <Switch
                      onValueChange={() => {
                        setSwitchSettings((prev) => item == 'Email' ?
                          ({ ...prev, ...{ goal: { ...prev.goal, ...{ email: !prev.goal.email } } } })
                          :
                          ({ ...prev, ...{ goal: { ...prev.goal, ...{ push: !prev.goal.push } } } })
                        )
                        mutate({ token: userLoginData?.data?.access ?? '', notifications: switchSettings })
                      }}
                      value={item == 'Email' ? switchSettings?.goal?.email : switchSettings?.goal?.push}
                    />
                  </NotificationSettingsBodyLoginSwitchWrapper>
                )
              })}
            </NotificationSettingsBodyLoginSwitchContainer>
          </NotificationSettingsBodyLoginContainer>
        </NotificationSettingsBodyContainer>
      </NotificationSettingsContainer>
    </StyledRoot>
  )
}

export default NotificationSettings