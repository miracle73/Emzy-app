import { useNavigation } from '@react-navigation/native'
import { Actionsheet, Radio, Stack } from 'native-base'
import React, { useState } from 'react'
import AppButton from '../../Components/AppButton/AppButton'
import Navigation from '../../Components/Navigation/Navigation'
import PasswordSuccessIcon from '../../Images/More/PasswordSuccessIcon'
import BackArrow from '../../Images/SignUp/BackArrow'
import AddMemberIcon from '../../Images/Tracker/AddMemberIcon'
import TrackerMessageIcon from '../../Images/Tracker/TrackerMessageIcon'
import { KrptoniteTab } from '../../Utils/Consts/Tracker'
import { AccountabilityMemberContainer, AccountabilityMemberProfileContainer, AccountabilityMemberTitle, CertificationActionSheetBodyContainer, CertificationActionSheetBodyDescription, CertificationActionSheetBodyTitle, CertificationActionSheetContainer, CertificationCardContainer, CertificationCardEndLine, CertificationCardRowContainer, CertificationCardRowLeftTitle, CertificationCardRowRightTitle, CertificationCardWrapper, CertificationContainer, CertificationFooterContainer, CertificationFooterWrapper, CertificationHeaderContainer, CertificationHeaderTitle, CertificationTab, CertificationTabContainer, CertificationTabTitle, CertificationTabWrapper, CertificationWrapper, Icon, InfoContainer, InfoDescription, InfoTitle, OutcomeContainer, OutcomeTitle, ProfileImage } from './Tracker.styled'

const Certification = () => {
    const [selectedTeb, setSelectedTab] = useState<number>(KrptoniteTab.Money)
    const [isOpenActionSheet, setIsOpenActionSheet] = useState<boolean>(false)
    const handleOpenActionSheet = () => {
        setIsOpenActionSheet(true)
    }
    const handleCloseActionSheet = () => {
        setIsOpenActionSheet(false)
    }
    const navigation = useNavigation();
  return (
    <CertificationWrapper>
        <CertificationContainer>
            <CertificationHeaderContainer>
                <Icon onPress={() => navigation.goBack()}>
                    <BackArrow />
                </Icon>
                <CertificationHeaderTitle>Get PMP Certification</CertificationHeaderTitle>
            </CertificationHeaderContainer>
            <CertificationCardContainer>
                <CertificationCardWrapper>
                    <CertificationCardRowContainer>
                        <CertificationCardRowLeftTitle>Criteria for success:</CertificationCardRowLeftTitle>
                        <CertificationCardRowRightTitle>Complete PMP Course</CertificationCardRowRightTitle>
                    </CertificationCardRowContainer>
                    <CertificationCardRowContainer>
                        <CertificationCardRowLeftTitle>Importance:</CertificationCardRowLeftTitle>
                        <CertificationCardRowRightTitle>Top priority</CertificationCardRowRightTitle>
                    </CertificationCardRowContainer>
                    <CertificationCardRowContainer>
                        <CertificationCardRowLeftTitle>Timeline:</CertificationCardRowLeftTitle>
                        <CertificationCardRowRightTitle>May 1st- may 25th</CertificationCardRowRightTitle>
                    </CertificationCardRowContainer>
                    <CertificationCardRowContainer>
                        <CertificationCardRowLeftTitle>Percentage</CertificationCardRowLeftTitle>
                        <CertificationCardRowRightTitle>23%</CertificationCardRowRightTitle>
                    </CertificationCardRowContainer>
                </CertificationCardWrapper>
                <CertificationCardEndLine></CertificationCardEndLine>
            </CertificationCardContainer>
            <AccountabilityMemberContainer>
                <AccountabilityMemberTitle>Accountability Members</AccountabilityMemberTitle>
                <AccountabilityMemberProfileContainer>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} index={0}></ProfileImage>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} index={1}></ProfileImage>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} index={2}></ProfileImage>
                    <Icon style={{marginLeft: 3*40}}>
                        <AddMemberIcon />
                    </Icon>
                </AccountabilityMemberProfileContainer>
            </AccountabilityMemberContainer>
            <InfoContainer>
                <InfoTitle>Level of importance</InfoTitle>
                <InfoDescription>Top Priority</InfoDescription>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>Deadline</InfoTitle>
                <InfoDescription>25th May, 2023</InfoDescription>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>Reward</InfoTitle>
                <InfoDescription>
                    Here’s 3xp of dopamine for you!{`\n`}
                    Complete your tasks to get more!
                </InfoDescription>
            </InfoContainer>
            <OutcomeContainer>
                <OutcomeTitle>Does it  align with TOP Desired Outcome</OutcomeTitle>
                <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Radio value="1" my={1}>
                        First
                    </Radio>
                    <Radio value="2" my={1}>
                        Second
                    </Radio>
                </Radio.Group>
            </OutcomeContainer>
            <CertificationTabContainer>
                <CertificationTabTitle>Krptonite</CertificationTabTitle>
                <CertificationTabWrapper>
                    <CertificationTab isSelected={selectedTeb === KrptoniteTab?.Money} onPress={() => setSelectedTab(KrptoniteTab?.Money)}>Money</CertificationTab>
                    <CertificationTab isSelected={selectedTeb === KrptoniteTab?.Distractions} onPress={() => setSelectedTab(KrptoniteTab?.Distractions)}>Distractions</CertificationTab>
                    <CertificationTab isSelected={selectedTeb === KrptoniteTab?.LackOfRest} onPress={() => setSelectedTab(KrptoniteTab?.LackOfRest)}>Lack of rest</CertificationTab>
                </CertificationTabWrapper>
            </CertificationTabContainer>
            <CertificationFooterContainer>
                <CertificationFooterWrapper>
                    <AppButton buttonLabel='Mark  done for today' onPress={() => setIsOpenActionSheet(true)}/>
                </CertificationFooterWrapper>
                <Icon style={{position: 'relative'}} onPress={() => navigation.navigate('Chat')}>
                    <TrackerMessageIcon />
                </Icon>
            </CertificationFooterContainer>
        </CertificationContainer>

        <Actionsheet isOpen={isOpenActionSheet} onClose={handleCloseActionSheet}>
            <Actionsheet.Content>
                <CertificationActionSheetContainer>
                    <PasswordSuccessIcon />
                    <CertificationActionSheetBodyContainer>
                        <CertificationActionSheetBodyTitle>You Showed UP!</CertificationActionSheetBodyTitle>
                        <CertificationActionSheetBodyDescription>Hit All Three to get the Dopamine!</CertificationActionSheetBodyDescription>
                    </CertificationActionSheetBodyContainer>
                    <CertificationActionSheetBodyContainer></CertificationActionSheetBodyContainer>
                    <AppButton buttonLabel=' Go back home' onPress={() => navigation.goBack()}/>
                </CertificationActionSheetContainer>
            </Actionsheet.Content>
        </Actionsheet>
    </CertificationWrapper>
  )
}

export default Certification