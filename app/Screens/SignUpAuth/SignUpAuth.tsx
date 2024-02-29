import React from 'react'
import BackArrow from '../../Images/SignUp/BackArrow'
import CrossIcon from '../../Images/SignUp/CrossIcon'
import DeleteIcon from '../../Images/SignUp/DeleteIcon'
import DownloadIcon from '../../Images/SignUp/DownloadIcon'
import InfoIcon from '../../Images/SignUp/InfoIcon'
import { Icon, SignUpAuthContainer, SignUpAuthToolbarHeaderContainer, SignUpBodyContainer, SignUpBodyContainerTitle, SignUpDescription, SignUpHeaderContainer, SignUpHeaderTitle, SignUpInboxContainer, SignUpInboxTitle, SignUpMessage, SignUpMessageSpan, SignUpOtpInput, SignUpToolbarContainer } from './SignUpAuth.styled'

const SignUpAuth = () => {
  return (
    <SignUpAuthContainer>
        <SignUpAuthToolbarHeaderContainer>
            <Icon>
                <BackArrow />
            </Icon>
            <SignUpToolbarContainer>
                <Icon>
                    <DownloadIcon />
                </Icon>
                <Icon>
                    <InfoIcon />
                </Icon>
                <Icon>
                    <DeleteIcon />
                </Icon>
            </SignUpToolbarContainer>
        </SignUpAuthToolbarHeaderContainer>
        <SignUpHeaderContainer>
            <SignUpHeaderTitle>Welcome to Emo - Please verify your email</SignUpHeaderTitle>
            <SignUpInboxContainer>
                <SignUpInboxTitle>Inbox</SignUpInboxTitle>
                <CrossIcon />         
            </SignUpInboxContainer>
        </SignUpHeaderContainer>
        <SignUpBodyContainer>
            <SignUpBodyContainerTitle>Verify your email address</SignUpBodyContainerTitle>
            <SignUpMessage>Hi there,</SignUpMessage>
            <SignUpMessage>Verify your email with the code below to start using <SignUpMessageSpan>Emo.</SignUpMessageSpan></SignUpMessage>
            <SignUpOtpInput value='012345' onChange={() => {}}></SignUpOtpInput>
            <SignUpDescription>If you did not create a Emo account, you can ignore this message.</SignUpDescription>
            <SignUpDescription>Warm regards,{'\n'} Your Emo Team.</SignUpDescription>
        </SignUpBodyContainer>
    </SignUpAuthContainer>
  )
}

export default SignUpAuth