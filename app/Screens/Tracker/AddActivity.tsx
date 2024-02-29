import { useNavigation } from '@react-navigation/native';
import React from 'react'
import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';
import BackArrow from '../../Images/SignUp/BackArrow'
import { AddActivityBodyContainer, AddActivityContainer, AddActivityFooterContainer, AddActivityHeaderContainer, AddActivityHeaderTitle, Icon } from './Tracker.styled'

const AddActivity = () => {
    const navigation = useNavigation();
  return (
    <AddActivityContainer>
        <AddActivityHeaderContainer>
            <Icon onPress={() => navigation.goBack()}>
                <BackArrow />
            </Icon>
            <AddActivityHeaderTitle>Set  better goal</AddActivityHeaderTitle>
        </AddActivityHeaderContainer>
        <AddActivityBodyContainer>
            <AppInput onChange={() => {}} name={'email'} value={''} placeHolder={'Enter goal'}/>
        </AddActivityBodyContainer>
        <AddActivityFooterContainer>
            <AppButton buttonLabel='Add' onPress={() => {}}/>
        </AddActivityFooterContainer>
    </AddActivityContainer>
  )
}

export default AddActivity