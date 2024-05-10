import { StyleSheet, Text } from 'react-native'
import { Actionsheet, Radio } from 'native-base'
import React, { FC, useState } from 'react'
import AppButton from '../../Components/AppButton/AppButton'
import PasswordSuccessIcon from '../../Images/More/PasswordSuccessIcon'
import AddMemberIcon from '../../Images/Tracker/AddMemberIcon'
import TrackerMessageIcon from '../../Images/Tracker/TrackerMessageIcon'
import { KrptoniteTab } from '../../Utils/Consts/Tracker'
import StyledRoot from '../../Components/StyledRoot'
import SecondaryHeader from '../../Components/Header/SecondaryHeader'
import { AccountabilityMemberContainer, AccountabilityMemberProfileContainer, AccountabilityMemberTitle, CertificationActionSheetBodyContainer, CertificationActionSheetBodyDescription, CertificationActionSheetBodyTitle, CertificationActionSheetContainer, CertificationCardContainer, CertificationCardEndLine, CertificationCardRowContainer, CertificationCardRowLeftTitle, CertificationCardRowRightTitle, CertificationCardWrapper, CertificationContainer, CertificationFooterContainer, CertificationFooterWrapper, CertificationHeaderContainer, CertificationHeaderTitle, CertificationTab, CertificationTabContainer, CertificationTabTitle, CertificationTabWrapper, CertificationWrapper, Icon, InfoContainer, InfoDescription, InfoTitle, OutcomeContainer, OutcomeTitle, ProfileImage } from './Tracker.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const Certification: FC<Props> = ({ navigation, route }) => {
    const data = route?.params
    const [selectedTeb, setSelectedTab] = useState<number>(KrptoniteTab.Money)
    const [isOpenActionSheet, setIsOpenActionSheet] = useState<boolean>(false)

    const handleOpenActionSheet = () => {
        setIsOpenActionSheet(true)
    }
    const handleCloseActionSheet = () => {
        setIsOpenActionSheet(false)
    }

    return (
        <StyledRoot
            style={{ paddingRight: 0, paddingLeft: 0 }}
            contentContainerStyle={{ paddingBottom: 0 }}
            Header={() => <SecondaryHeader
                centerTitle={'Get PMP Certification'}
                centerTitlestyle={{ fontSize: 24, color: '#3498DB', lineHeight: 30 }}
                onBackPress={() => navigation.goBack()}
                style={{ paddingLeft: 10 }}
            />}
        >
            <CertificationContainer>
                <CertificationCardContainer>
                    <CertificationCardWrapper>
                        <CertificationCardRowContainer>
                            <CertificationCardRowLeftTitle>Criteria for success:</CertificationCardRowLeftTitle>
                            <CertificationCardRowRightTitle>{data?.goal?.success_metrics}</CertificationCardRowRightTitle>
                        </CertificationCardRowContainer>
                        <CertificationCardRowContainer>
                            <CertificationCardRowLeftTitle>Importance:</CertificationCardRowLeftTitle>
                            <CertificationCardRowRightTitle>Top priority</CertificationCardRowRightTitle>
                        </CertificationCardRowContainer>
                        <CertificationCardRowContainer>
                            <CertificationCardRowLeftTitle>Timeline:</CertificationCardRowLeftTitle>
                            <CertificationCardRowRightTitle>{data?.goal?.due_date}</CertificationCardRowRightTitle>
                        </CertificationCardRowContainer>
                        <CertificationCardRowContainer>
                            <CertificationCardRowLeftTitle>Percentage</CertificationCardRowLeftTitle>
                            <CertificationCardRowRightTitle>{data?.goal?.percentage_complete}%</CertificationCardRowRightTitle>
                        </CertificationCardRowContainer>
                    </CertificationCardWrapper>
                    <CertificationCardEndLine></CertificationCardEndLine>
                </CertificationCardContainer>
                <AccountabilityMemberContainer>
                    <AccountabilityMemberTitle>Accountability Members</AccountabilityMemberTitle>
                    <AccountabilityMemberProfileContainer>
                        <ProfileImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} index={0}></ProfileImage>
                        <ProfileImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} index={1}></ProfileImage>
                        <ProfileImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} index={2}></ProfileImage>
                        <Icon style={{ marginLeft: 3 * 40 }}>
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
                    <InfoDescription>{data?.goal?.due_date}</InfoDescription>
                </InfoContainer>
                <InfoContainer>
                    <InfoTitle>Reward</InfoTitle>
                    <InfoDescription>
                        {data?.goal?.rewards?.length > 0 && data?.goal?.rewards[0]}{`\n`}
                        Complete your tasks to get more!
                    </InfoDescription>
                </InfoContainer>
                <OutcomeContainer>
                    <OutcomeTitle>Does it align with TOP Desired Outcome</OutcomeTitle>
                    <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
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
                        <CertificationTab isSelected={selectedTeb === KrptoniteTab?.Money} onPress={() => setSelectedTab(KrptoniteTab?.Money)}>
                            <Text style={styles.selection}>Money</Text>
                        </CertificationTab>
                        <CertificationTab isSelected={selectedTeb === KrptoniteTab?.Distractions} onPress={() => setSelectedTab(KrptoniteTab?.Distractions)}>
                            <Text style={styles.selection}>Distractions</Text>
                        </CertificationTab>
                        <CertificationTab isSelected={selectedTeb === KrptoniteTab?.LackOfRest} onPress={() => setSelectedTab(KrptoniteTab?.LackOfRest)}>
                            <Text style={styles.selection}>Lack of rest</Text>
                        </CertificationTab>
                    </CertificationTabWrapper>
                </CertificationTabContainer>
                <CertificationFooterContainer>
                    <CertificationFooterWrapper>
                        <AppButton buttonLabel={'Mark done for today'} onPress={() => setIsOpenActionSheet(true)} />
                    </CertificationFooterWrapper>
                    <Icon style={{ position: 'relative' }} onPress={() => navigation.navigate('Chat', route?.params)}>
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
                        <AppButton buttonLabel=' Go back home' onPress={() => navigation.goBack()} />
                    </CertificationActionSheetContainer>
                </Actionsheet.Content>
            </Actionsheet>
        </StyledRoot >
    )
}

export default Certification

const styles = StyleSheet.create({
    selection: {
        fontFamily: 'Poppins Regular',
        fontWeight: '400',
        fontSize: 16,
        color: '#52525B'
    }
})