import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Modal, Platform, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInfoButton from '../../Components/AppInfoButton/AppInfoButton'
import AppTextArea from '../../Components/AppTextArea/AppTextArea'
import BackArrow from '../../Images/SignUp/BackArrow'
import { GoalBackContainer, GoalBodyContainer, GoalFooterContainer, GoalHeaderContainer, GoalHeaderDescription, GoalHeaderTitle, GoalsContainer, Icon, ModalBodyContainer, ModalContainer, ModalWrapper, ModelBodyDescription } from './Goals.styled'

const Goals = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleOpenModel = () => {
        setIsOpen(!isOpen)
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
            <GoalsContainer>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isOpen}
                    onRequestClose={() => {
                    setIsOpen(!isOpen);
                    }}>
                    <ModalWrapper>
                        <ModalContainer>
                            <ModalBodyContainer>
                                <ModelBodyDescription>
                                    Explanation of Success Criteria
                                    {'\n'}{'\n'}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero tristique, consequat elit id, cursus elit. Sed at semper dolor. Vivamus tincidunt, ex vel iaculis gravida, mauris tortor finibus ipsum, a efficitur velit dolor vel nunc. Fusce euismod, velit nec volutpat mattis, urna elit accumsan lacus, nec fringilla sem diam in neque. Suspendisse potenti. In hac habitasse platea dictumst. Integer venenatis ipsum id nulla facilisis, sed tempus massa consectetur.
                                    {'\n'}{'\n'}
                                    Praesent vestibulum metus eu sapien feugiat tristique. Sed ultricies, justo et fermentum faucibus, tellus dui blandit dui, nec molestie justo elit nec arcu. Nulla facilisi. Pellentesque in rhoncus nisl. Nullam cursus risus sit amet arcu dapibus pharetra. Etiam sodales felis non ipsum vestibulum feugiat. Donec vitae ligula et mauris volutpat aliquet sed vel turpis. Curabitur eget felis lacus.
                                </ModelBodyDescription>
                            </ModalBodyContainer>
                        </ModalContainer>   
                    </ModalWrapper>
                </Modal>

                <GoalBackContainer>
                    <Icon>
                        <BackArrow />
                    </Icon>
                </GoalBackContainer>
                <GoalHeaderContainer>
                    <GoalHeaderTitle>Set  better goal</GoalHeaderTitle>
                    <GoalHeaderDescription>Summary of coaching on how to set better goals</GoalHeaderDescription>
                    <AppInfoButton buttonLabel={'Read More'} onPress={() => handleOpenModel()} />
                </GoalHeaderContainer>
                <GoalBodyContainer>
                    <AppTextArea onChange={() => {}}/> 
                </GoalBodyContainer>
                <GoalFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
                </GoalFooterContainer>
            </GoalsContainer>
        </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Goals