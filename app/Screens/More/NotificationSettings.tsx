import React, { FC, useState } from 'react'
import { Switch } from 'react-native';
import BackArrow from '../../Images/SignUp/BackArrow'
import { NotificationSettingsLoginAttemptSwitchLabel, NotificationSettingsGoalsSwitchLabel } from '../../Utils/Consts/More';
import { Icon, NotificationSettingsBodyContainer, NotificationSettingsBodyLoginContainer, NotificationSettingsBodyLoginDescription, NotificationSettingsBodyLoginSwitchContainer, NotificationSettingsBodyLoginSwitchLabel, NotificationSettingsBodyLoginSwitchWrapper, NotificationSettingsBodyLoginTitle, NotificationSettingsContainer, NotificationSettingsHeaderContainer, NotificationSettingsHeaderTitle } from './More.styled'
import StyledRoot from '../../Components/StyledRoot'
import { Props } from '../../Utils/utility_functions/utilityFunctions'


const NotificationSettings: FC<Props> = ({ navigation }) => {



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
                      onValueChange={() => { }}
                      value={true}
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
                      onValueChange={() => { }}
                      value={false}
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