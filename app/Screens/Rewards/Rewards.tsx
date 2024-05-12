import React, { FC, useContext, useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import CrossIcon from '../../Images/SignUp/CrossIcon'
import { RewardsOption, RewardsOptionData, RewardsTagsData } from '../../Utils/Consts/Rewards'
import { Icon, RewardOption, RewardOptionContainer, RewardOptionTitle, RewardOptionWrapper, RewardsBackContainer, RewardsBodyContainer, RewardsBodyDescription, RewardsBodyTitle, RewardsContainer, RewardsFooterContainer, RewardsHeaderContainer, RewardsHeaderTitle, RewardsTag, RewardsTagContainer, RewardsTagWrapper, RewardsWrapper } from './Rewards.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { AppContext } from '../../data_storage/contextApi/AppContext'

const Rewards: FC<Props> = ({ navigation }) => {
    const { goalObject, setGoalObject } = useContext(AppContext)
    const [reward, setReward] = useState<Array<string>>([])


    const handleChangeOption = (item: string) => {
        if (reward.includes(item)) { setReward((val) => val.filter((e) => e !== item)) }
        else { setReward((val) => [...val, ...[item]]) }
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
                                            <RewardOption onPress={() => handleChangeOption(item)} isActive={reward.includes(item)}>{item}</RewardOption>
                                        )
                                    })}
                                </RewardOptionWrapper>
                            </RewardOptionContainer>
                            <RewardsBodyTitle>Even better, gift yourself rewards that matter to you</RewardsBodyTitle>
                            <AppInput
                                onChange={(val) => { }}
                                name={'name'}
                                value={reward}
                                label={'Rewards'}
                                onEndEditing={(val) => { if (val?.trim()?.length > 0) { setReward((re) => [...re, ...[val]]) } }}
                            />
                            <RewardsTagContainer>
                                {reward?.map((item) => {
                                    return (
                                        <RewardsTagWrapper>
                                            <RewardsTag>{item}</RewardsTag>
                                            <Icon onPress={() => { setReward((val) => val.filter((e) => e !== item)) }}>
                                                <CrossIcon></CrossIcon>
                                            </Icon>
                                        </RewardsTagWrapper>
                                    )
                                })}
                            </RewardsTagContainer>
                        </RewardsBodyContainer>
                    </RewardsWrapper>
                    <RewardsFooterContainer>
                        <AppButton disabled={reward.length < 1} buttonLabel={'Continue'} onPress={() => {
                            setGoalObject({ ...goalObject, ...{ rewards: reward } })
                            navigation.navigate('CommitmentSplashInitial')
                        }} />
                    </RewardsFooterContainer>
                </RewardsContainer>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default Rewards