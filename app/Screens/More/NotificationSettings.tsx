import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Switch } from 'react-native';
import BackArrow from '../../Images/SignUp/BackArrow'
import { NotificationSettingsSwitchLabel } from '../../Utils/Consts/More';
import { Icon, NotificationSettingsBodyContainer, NotificationSettingsBodyLoginContainer, NotificationSettingsBodyLoginDescription, NotificationSettingsBodyLoginSwitchContainer, NotificationSettingsBodyLoginSwitchLabel, NotificationSettingsBodyLoginSwitchWrapper, NotificationSettingsBodyLoginTitle, NotificationSettingsContainer, NotificationSettingsHeaderContainer, NotificationSettingsHeaderTitle } from './More.styled'

const NotificationSettings = () => {
  const navigation = useNavigation();
  return (
    <NotificationSettingsContainer>
      <NotificationSettingsHeaderContainer>
        <Icon onPress={() => navigation.goBack()}>
          <BackArrow />
        </Icon>
        <NotificationSettingsHeaderTitle>Notification settings</NotificationSettingsHeaderTitle>
      </NotificationSettingsHeaderContainer>
      <NotificationSettingsBodyContainer>
        <NotificationSettingsBodyLoginContainer>
          <NotificationSettingsBodyLoginTitle>Login attempts</NotificationSettingsBodyLoginTitle>
          <NotificationSettingsBodyLoginDescription>These are notifications to notify you when your account is being accessed</NotificationSettingsBodyLoginDescription>
          <NotificationSettingsBodyLoginSwitchContainer>
            {NotificationSettingsSwitchLabel?.map((item) => {
              return (
                <NotificationSettingsBodyLoginSwitchWrapper>
                  <NotificationSettingsBodyLoginSwitchLabel>{item}</NotificationSettingsBodyLoginSwitchLabel>
                  <Switch
                    onValueChange={() => {}}
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
            {NotificationSettingsSwitchLabel?.map((item) => {
              return (
                <NotificationSettingsBodyLoginSwitchWrapper>
                  <NotificationSettingsBodyLoginSwitchLabel>{item}</NotificationSettingsBodyLoginSwitchLabel>
                  <Switch
                    onValueChange={() => {}}
                    value={true}
                  />
                </NotificationSettingsBodyLoginSwitchWrapper>
              )
            })}
          </NotificationSettingsBodyLoginSwitchContainer>
        </NotificationSettingsBodyLoginContainer>
      </NotificationSettingsBodyContainer>
    </NotificationSettingsContainer>
  )
}

export default NotificationSettings