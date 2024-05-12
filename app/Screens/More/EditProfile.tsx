import React, { FC, useState, useContext } from 'react'
import AppLineInput from '../../Components/AppLineInput/AppLineInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { EditProfileBodyContainer, EditProfileContactInformationContainer, EditProfileContactInformationTitle, EditProfileContainer, EditProfileHeaderContainer, EditProfileHeaderTitle, EditProfileSaveButton, EditProfileSaveButtonTitle, Icon } from './More.styled'
import StyledRoot from '../../Components/StyledRoot'
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { useDashboardService } from '../Dashboard/dashboardService'
import { useMutation } from '@tanstack/react-query'
import { updateProfile } from '../../Utils/network_service/NetworkServices'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'
import { colors } from '../../Utils/theme/colors'



const EditProfile: FC<Props> = ({ navigation }) => {
    const { userWholeDetails, userLoginData } = useContext(AppContext)
    const [refetchUserDetails] = useDashboardService()
    const [firstName, setFirstName] = useState<string>(userWholeDetails?.data?.first_name ?? '')
    const [lastName, setLastName] = useState<string>(userWholeDetails?.data?.last_name ?? '')
    const [email, setEmail] = useState<string>(userWholeDetails?.data?.email ?? '')


    const { mutate, isLoading } = useMutation(updateProfile, {
        onSuccess: (data: any) => {
            if (data?.data?.status == 'success') {
                refetchUserDetails()
                displayToast('success', 'SUCCESS', data?.data?.message)

            } else {
                displayToast('error', 'ERROR', data?.data?.message)
                return
            }
        },
        onError: (err: any) => {
            displayToast('error', 'ERROR', 'Profile update has failed. Try again later.')
        },
    });


    return (
        <StyledRoot
            headerRapperStyle={{ paddingHorizontal: 25 }}
            Header={() => (
                <EditProfileHeaderContainer>
                    <Icon style={{ position: 'relative', marginLeft: -20 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </Icon>
                    <EditProfileHeaderTitle>Profile</EditProfileHeaderTitle>
                    <EditProfileSaveButton onPress={() => { mutate({ token: userLoginData?.data?.access, firstName, lastName }) }}>
                        {isLoading ?
                            <LoadingIndicator size={'large'} color={colors.riverRed} />
                            :
                            <EditProfileSaveButtonTitle>Save</EditProfileSaveButtonTitle>
                        }
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
                        <AppLineInput editable={false} label='Email address' value={email} handleChange={(val: string) => { setEmail(val) }} placeholder={'Enter Email Address'} />
                    </EditProfileContactInformationContainer>
                </EditProfileBodyContainer>
            </EditProfileContainer>
        </StyledRoot>
    )
}



export default EditProfile