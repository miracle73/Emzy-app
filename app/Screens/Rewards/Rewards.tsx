import React, { FC, useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import CrossIcon from '../../Images/SignUp/CrossIcon'
import { RewardsOption, RewardsOptionData, RewardsTagsData } from '../../Utils/Consts/Rewards'
import { Icon, RewardOption, RewardOptionContainer, RewardOptionTitle, RewardOptionWrapper, RewardsBackContainer, RewardsBodyContainer, RewardsBodyDescription, RewardsBodyTitle, RewardsContainer, RewardsFooterContainer, RewardsHeaderContainer, RewardsHeaderTitle, RewardsTag, RewardsTagContainer, RewardsTagWrapper, RewardsWrapper } from './Rewards.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const Rewards: FC<Props> = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState<string>(RewardsOption.AppStore)
    const [reward, setReward] = useState<string>('')
    const handleChangeOption = (item: string) => {
        setSelectedOption(item)
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
                <RewardsContainer>
                    <RewardsWrapper contentContainerStyle={{ gap: 20 }}>
                        <RewardsBackContainer>
                            <Icon onPress={() => navigation.goBack()}>
                                <BackArrow />
                            </Icon>
                        </RewardsBackContainer>
                        <RewardsHeaderContainer>
                            <RewardsHeaderTitle>My Rewards</RewardsHeaderTitle>
                        </RewardsHeaderContainer>
                        <RewardsBodyContainer>
                            <RewardsBodyDescription>If it ain’t fun, we don’t want it!😂</RewardsBodyDescription>
                            <RewardOptionContainer>
                                <RewardOptionTitle>Your mastery reward in-app options</RewardOptionTitle>
                                <RewardOptionWrapper>
                                    {RewardsOptionData?.map((item) => {
                                        return (
                                            <RewardOption onPress={() => handleChangeOption(item)} isActive={item === selectedOption}>{item}</RewardOption>
                                        )
                                    })}
                                </RewardOptionWrapper>
                            </RewardOptionContainer>
                            <RewardsBodyTitle>Even better, gift yourself rewards that matter to you</RewardsBodyTitle>
                            <AppInput label={'Rewards'} onChange={(val) => { setReward(val) }} name={'name'} value={reward} />
                            <RewardsTagContainer>
                                {RewardsTagsData?.map((item) => {
                                    return (
                                        <RewardsTagWrapper>
                                            <RewardsTag>{item}</RewardsTag>
                                            <Icon>
                                                <CrossIcon></CrossIcon>
                                            </Icon>
                                        </RewardsTagWrapper>
                                    )
                                })}
                            </RewardsTagContainer>
                        </RewardsBodyContainer>
                    </RewardsWrapper>
                    <RewardsFooterContainer>
                        <AppButton buttonLabel={'Continue'} onPress={() => { navigation.navigate('CommitmentSplashInitial') }} />
                    </RewardsFooterContainer>
                </RewardsContainer>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default Rewards