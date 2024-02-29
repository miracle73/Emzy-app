import React from 'react'
import BackArrow from '../../Images/SignUp/BackArrow'
import CrossIcon from '../../Images/SignUp/CrossIcon'
import DeleteIcon from '../../Images/SignUp/DeleteIcon'
import DownloadIcon from '../../Images/SignUp/DownloadIcon'
import InfoIcon from '../../Images/SignUp/InfoIcon'
import { Icon, ResetAuthBackContainer, ResetAuthBodyContainer, ResetAuthBodyDescription, ResetAuthBodyDescriptionSpan, ResetAuthBodyTitle, ResetAuthContainer, ResetAuthNotificationBoxContainer, ResetAuthNotificationBoxTitle, ResetAuthNotificationContainer, ResetAuthNotificationTitle, ResetAuthProfileNameTitle, ResetAuthToolbarContainer } from './ResetAuth.styled'

const ResetAuth = () => {
  return (
    <ResetAuthContainer>
        <ResetAuthBackContainer>
            <Icon>
                <BackArrow />
            </Icon>
            <ResetAuthToolbarContainer>
                <Icon>
                    <DownloadIcon />
                </Icon>
                <Icon>
                    <InfoIcon />
                </Icon>
                <Icon>
                    <DeleteIcon />
                </Icon>
            </ResetAuthToolbarContainer>
        </ResetAuthBackContainer>
        <ResetAuthNotificationContainer>
            <ResetAuthNotificationTitle>Welcome to Emo - Please verify your Email</ResetAuthNotificationTitle>
            <ResetAuthNotificationBoxContainer>
                <ResetAuthNotificationBoxTitle>Inbox</ResetAuthNotificationBoxTitle>
                <CrossIcon />
            </ResetAuthNotificationBoxContainer>
        </ResetAuthNotificationContainer>
        <ResetAuthBodyContainer>
            <ResetAuthProfileNameTitle>Emo</ResetAuthProfileNameTitle>
            <ResetAuthBodyTitle>Reset your password</ResetAuthBodyTitle>
            <ResetAuthBodyDescription>
                Hi there,
                {'\n'}{'\n'}
                You recently tried to request a password change from for your account. As a security measure, you need to lick the link below to verify your identity 
            </ResetAuthBodyDescription>
            <ResetAuthBodyDescription>
                https://paysure.com/reset
            </ResetAuthBodyDescription>
            <ResetAuthBodyDescription>
                If you do not recognize this activity, please contact us at support@Emo.com or simply reply to this email to secure your account.
                {'\n'}{'\n'}
                Warm regards,
                {'\n'}
                <ResetAuthBodyDescriptionSpan>Emo</ResetAuthBodyDescriptionSpan>
            </ResetAuthBodyDescription>
        </ResetAuthBodyContainer>
    </ResetAuthContainer>
  )
}

export default ResetAuth