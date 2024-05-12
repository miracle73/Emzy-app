import { Box, Slider, VStack } from 'native-base';
import React, { FC, useState } from 'react'
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton';
import AppTextArea from '../../Components/AppTextArea/AppTextArea';
import BackArrow from '../../Images/SignUp/BackArrow'
import { CommitmentImportantData, CommitmentImportantEnum } from '../../Utils/Consts/Commitment'
import { CommitmentBackContainer, CommitmentBodyContainer, CommitmentBodyDescription, CommitmentContainer, CommitmentFooterContainer, CommitmentHeaderContainer, CommitmentHeaderTitle, CommitmentImportant, CommitmentImportantContainer, CommitmentImportantTitle, CommitmentImportantWrapper, CommitmentSliderContainer, CommitmentSliderDescription, CommitmentSliderLabel, CommitmentSliderTitle, CommitmentSliderWrapper, Icon } from './Commitment.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions';


const Commitment: FC<Props> = ({ navigation }) => {
    const [selectedImportantData, setSelectedImportantData] = useState<number>(CommitmentImportantEnum.first)
    const [sliderValue, setSliderValue] = useState<any>('0')
    const handleChangeImportant = (item: number) => {
        setSelectedImportantData(item)
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
                        <AppTextArea onChange={() => { }} />
                    </CommitmentBodyContainer>
                    <CommitmentFooterContainer>
                        <AppButton buttonLabel={'Continue'} onPress={() => { navigation.navigate('TriggerSplashInitial') }} />
                    </CommitmentFooterContainer>
                </CommitmentContainer>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default Commitment