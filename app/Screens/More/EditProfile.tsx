import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import AppLineInput from '../../Components/AppLineInput/AppLineInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { EditProfileBodyContainer, EditProfileContactInformationContainer, EditProfileContactInformationTitle, EditProfileContainer, EditProfileHeaderContainer, EditProfileHeaderTitle, EditProfileSaveButton, EditProfileSaveButtonTitle, Icon } from './More.styled'

const EditProfile = () => {
    const navigation = useNavigation();
  return (
    <EditProfileContainer>
        <EditProfileHeaderContainer>
            <Icon style={{position: 'relative', marginLeft: -20}} onPress={() => navigation.goBack()}>
                <BackArrow />
            </Icon>
            <EditProfileHeaderTitle>Profile</EditProfileHeaderTitle>
            <EditProfileSaveButton>
                <EditProfileSaveButtonTitle>Save</EditProfileSaveButtonTitle>
            </EditProfileSaveButton>
        </EditProfileHeaderContainer>
        <EditProfileBodyContainer>
            <AppLineInput label='First name' value='' handleChange={() => {}} placeholder={'Enter First Name'}/>
            <AppLineInput label='Last name' value='' handleChange={() => {}} placeholder={'Enter Last Name'}/>
            <EditProfileContactInformationContainer>
                <EditProfileContactInformationTitle>CONTACT INFORMATION</EditProfileContactInformationTitle>
                <AppLineInput label='Email address' value='' handleChange={() => {}} placeholder={'Enter Email Address'}/>
            </EditProfileContactInformationContainer>
        </EditProfileBodyContainer>
    </EditProfileContainer>
  )
}



export default EditProfile