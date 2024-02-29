import React, { useState } from 'react'
import { Platform } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppTextArea from '../../Components/AppTextArea/AppTextArea'
import BackArrow from '../../Images/SignUp/BackArrow'
import { TriggersTagData, TriggersTagEnum } from '../../Utils/Consts/Triggers'
import { Icon, TriggersBackContainer, TriggersBodyContainer, TriggersBodyTitle, TriggersContainer, TriggersFooterContainer, TriggersHeaderContainer, TriggersHeaderTitle, TriggersTag, TriggersTagContainer, TriggersTagDescription, TriggersTagTitle, TriggersTagWrapper, TriggersWrapper } from './Triggers.styled'

const Triggers = () => {
    const [selectedTag, setSelectedTag] = useState<string>(TriggersTagEnum.LackFinance)
    const handleChangeTag = (item: string) => {
        setSelectedTag(item)
    }
  return (
    <LinearGradient
        colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
        >
            <TriggersContainer>
                <TriggersWrapper contentContainerStyle={{gap: 20}}>
                    <TriggersBackContainer>
                        <Icon>
                            <BackArrow />
                        </Icon>
                    </TriggersBackContainer>
                    <TriggersHeaderContainer>
                        <TriggersHeaderTitle>Your Triggers</TriggersHeaderTitle>
                    </TriggersHeaderContainer>
                    <TriggersBodyContainer>
                        <TriggersTagContainer>
                            <TriggersTagTitle>Anticipate your triggers.</TriggersTagTitle>
                            <TriggersTagDescription>What has held you back from achieving this outcome?</TriggersTagDescription>
                            <TriggersTagWrapper>
                                {TriggersTagData?.map((item, index) => {
                                    return (
                                        <TriggersTag key={index} onPress={() => handleChangeTag(item)} isActive={selectedTag === item}>{item}</TriggersTag>
                                    )
                                })}
                            </TriggersTagWrapper>
                        </TriggersTagContainer>
                        <TriggersBodyTitle>Are your triggers totally different?{`\n`}Type it below</TriggersBodyTitle>
                        <AppTextArea onChange={() => {}}/>
                    </TriggersBodyContainer>
                </TriggersWrapper>
                <TriggersFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
                </TriggersFooterContainer>
            </TriggersContainer>
        </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Triggers