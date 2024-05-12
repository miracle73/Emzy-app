import { Box, Slider, VStack } from 'native-base';
import React, { FC, useContext, useState } from 'react'
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton';
import AppTextArea from '../../Components/AppTextArea/AppTextArea';
import BackArrow from '../../Images/SignUp/BackArrow'
import { CommitmentImportantData, CommitmentImportantEnum } from '../../Utils/Consts/Commitment'
import { CommitmentBackContainer, CommitmentBodyContainer, CommitmentBodyDescription, CommitmentContainer, CommitmentFooterContainer, CommitmentHeaderContainer, CommitmentHeaderTitle, CommitmentImportant, CommitmentImportantContainer, CommitmentImportantTitle, CommitmentImportantWrapper, CommitmentSliderContainer, CommitmentSliderDescription, CommitmentSliderLabel, CommitmentSliderTitle, CommitmentSliderWrapper, Icon } from './Commitment.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Commitment: FC<Props> = ({ navigation }) => {
    const { goalObject, setGoalObject } = useContext(AppContext)
    const [selectedImportantData, setSelectedImportantData] = useState<number>(CommitmentImportantEnum.first)
    const [sliderValue, setSliderValue] = useState<any>('30')
    const [why, setWhy] = useState('')

    const handleChangeImportant = (item: number) => {
        setSelectedImportantData(item)
    }
    return (
        <LinearGradient
            colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <KeyboardAwareScrollView
               style={{ width: '100%', height: '100%' }}
            >
                <CommitmentContainer>
                    <CommitmentBackContainer>
                        <Icon onPress={() => navigation.goBack()}>
                            <BackArrow />
                        </Icon>
                    </CommitmentBackContainer>
                    <CommitmentHeaderContainer>
                        <CommitmentHeaderTitle>Commitment</CommitmentHeaderTitle>
                    </CommitmentHeaderContainer>
                    <CommitmentBodyContainer>
                        <CommitmentBodyDescription>Declare your Commitment</CommitmentBodyDescription>
                        <CommitmentImportantContainer>
                            <CommitmentImportantTitle>How important is this outcome to you?</CommitmentImportantTitle>
                            <CommitmentImportantWrapper>
                                {CommitmentImportantData?.map((item) => {
                                    return (
                                        <CommitmentImportant onPress={() => handleChangeImportant(item)} isActive={item === selectedImportantData}>{item}</CommitmentImportant>
                                    )
                                })}
                            </CommitmentImportantWrapper>
                        </CommitmentImportantContainer>
                        <CommitmentSliderContainer>
                            <CommitmentSliderTitle>How long have you wanted to create this?</CommitmentSliderTitle>
                            <CommitmentSliderWrapper>
                                <Box alignItems="center" w="75%">
                                    <VStack space={4} w="100%">
                                        <Slider
                                            defaultValue={30}
                                            size="md"
                                            minValue={0}
                                            maxValue={365}
                                            step={1}
                                            onChange={(val) => { setSliderValue(Math.floor(val)) }}
                                            onChangeEnd={(val) => { val && setSliderValue(Math.floor(val)) }}
                                        >
                                            <Slider.Track>
                                                <Slider.FilledTrack />
                                            </Slider.Track>
                                            <Slider.Thumb />
                                        </Slider>
                                    </VStack>
                                </Box>
                                <CommitmentSliderLabel>{sliderValue} days</CommitmentSliderLabel>
                            </CommitmentSliderWrapper>
                            <CommitmentSliderDescription>This is my why</CommitmentSliderDescription>
                        </CommitmentSliderContainer>
                        <AppTextArea onChange={(val) => { setWhy(val) }} />
                    </CommitmentBodyContainer>
                </CommitmentContainer>
                    <CommitmentFooterContainer>
                        <AppButton disabled={why?.trim()?.length < 3} buttonLabel={'Continue'} onPress={() => {
                            setGoalObject({ ...goalObject, ...{ duration: Number(sliderValue), commitmentReason: why, commitmentLevel: Number(selectedImportantData) } })
                            navigation.navigate('TriggerSplashInitial')
                        }} />
                    </CommitmentFooterContainer>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

export default Commitment