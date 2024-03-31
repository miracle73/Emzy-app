import React, { FC, useState } from 'react'
import AppLineInput from '../../Components/AppLineInput/AppLineInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { EditProfileBodyContainer, EditProfileContactInformationContainer, EditProfileContactInformationTitle, EditProfileContainer, EditProfileHeaderContainer, EditProfileHeaderTitle, EditProfileSaveButton, EditProfileSaveButtonTitle, Icon } from './More.styled'
import StyledRoot from '../../Components/StyledRoot'
import { Props } from '../../Utils/utility_functions/utilityFunctions'


const EditProfile: FC<Props> = ({ navigation }) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    return (
        <StyledRoot
            headerRapperStyle={{ paddingHorizontal: 25 }}
            Header={() => (
                <EditProfileHeaderContainer>
                    <Icon style={{ position: 'relative', marginLeft: -20 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </Icon>
                    <EditProfileHeaderTitle>Profile</EditProfileHeaderTitle>
                    <EditProfileSaveButton>
                        <EditProfileSaveButtonTitle>Save</EditProfileSaveButtonTitle>
                    </EditProfileSaveButton>
                </EditProfileHeaderContainer>
            )}
        >
            <EditProfileContainer>
                <EditProfileBodyContainer>
                    <AppLineInput label='First name' value={firstName} handleChange={(val: string) => { setFirstName(val) }} placeholder={'Enter First Name'} />
                    <AppLineInput label='Last name' value={lastName} handleChange={(val: string) => { setLastName(val) }} placeholder={'Enter Last Name'} />
                    <EditProfileContactInformationContainer>
                        <EditProfileContactInformationTitle>CONTACT INFORMATION</EditProfileContactInformationTitle>
                        <AppLineInput label='Email address' value={email} handleChange={(val: string) => { setEmail(val) }} placeholder={'Enter Email Address'} />
                    </EditProfileContactInformationContainer>
                </EditProfileBodyContainer>
            </EditProfileContainer>
        </StyledRoot>
    )
}



export default EditProfile