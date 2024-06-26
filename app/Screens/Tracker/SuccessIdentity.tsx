import React, { FC, useContext, useState } from 'react'
import { Platform } from 'react-native'
import { KeyboardAvoidingView, Modal } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInfoButton from '../../Components/AppInfoButton/AppInfoButton'
import AppTextArea from '../../Components/AppTextArea/AppTextArea'
import BackArrow from '../../Images/SignUp/BackArrow'
import { Icon, IdentityBackContainer, IdentityBodyContainer, IdentityContainer, IdentityFooterContainer, IdentityHeaderContainer, IdentityHeaderDescription, IdentityHeaderTitle, ModalBodyContainer, ModalContainer, ModalWrapper, ModelBodyDescription } from '../Identity/Identity.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text } from 'react-native'

const SuccessIdentity: FC<Props> = ({ navigation }) => {
    const { setGoalObject, goalObject, signupInProgress } = useContext(AppContext)
    const [identity, setIdentity] = useState('')
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
            <KeyboardAwareScrollView
                style={{ width: '100%', height: '100%' }}
            >
                <IdentityContainer>
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
                    <IdentityBackContainer>
                        <Icon onPress={() => navigation.goBack()}>
                            <BackArrow />
                        </Icon>
                    </IdentityBackContainer>
                    <IdentityHeaderContainer>
                        <IdentityHeaderTitle>My Success Identity</IdentityHeaderTitle>
                        <IdentityHeaderDescription>Summary of coaching on how to set better goals</IdentityHeaderDescription>
                        <AppInfoButton buttonLabel={'Read More'} onPress={() => handleOpenModel()} />
                    </IdentityHeaderContainer>
                    <IdentityBodyContainer>
                        <AppTextArea onChange={(val) => { setIdentity(val) }} />
                    </IdentityBodyContainer>
                </IdentityContainer>
                <IdentityFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => {
                        setGoalObject({ ...goalObject, ...{ successIdentity: identity } })
                        navigation.navigate('SuccessMetrics')
                    }} disabled={identity?.length < 3} />
                </IdentityFooterContainer>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

export default SuccessIdentity