import React, { useState, useContext, FC, useEffect } from 'react'
import { AccountabilityTypeTab } from '../../Utils/Consts/Accountability'
import StyledRoot from '../../Components/StyledRoot'
import { AccountabilityDashboardBodyContainer, AccountabilityDashboardContainer, AccountabilityDashboardHeaderContainer, AccountabilityDashboardHeaderTitle, AccountabilityProfileCardContainer, AccountabilityProfileCardDescription, AccountabilityProfileCardName, AccountabilityProfileCardNameContainer, AccountabilityProfileCardWrapper, AccountabilityProfileTime, AccountabilityTab, AccountabilityTabContainer, AccountabilityTabTitle, ProfileImage } from './Accountability.styled'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { useQuery } from '@tanstack/react-query'
import { getAccountabilityPartners } from '../../Utils/network_service/NetworkServices'
import { AccountabilityPartnerModel } from '../../Utils/data_models/dataTypes'
import { FlatList } from 'react-native'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'
import { colors } from '../../Utils/theme/colors'



const AccountabilityDashboard: FC<Props> = ({ navigation }) => {
    const { userLoginData } = useContext(AppContext)
    const [partners, setPartners] = useState<Array<AccountabilityPartnerModel>>()
    const [selectedTab, setSelectedTab] = useState<number>(AccountabilityTypeTab?.All)
    const [filtered, setFiltered] = useState<any>([])


    const { refetch, isRefetching } = useQuery(
        [
            'getAccountabilityPartners',
            { token: userLoginData?.data?.access }

        ],
        getAccountabilityPartners,
        {
            onSuccess: (data) => {
                if (data?.data?.status == 'success') {
                    setPartners(data?.data?.data)
                    setFiltered(data?.data?.data)
                }
            },
            onError: (err: any) => { },
        });

    useEffect(() => {
        console.log(partners)
        if (selectedTab == AccountabilityTypeTab?.All) { setFiltered(partners) }
        if (selectedTab == AccountabilityTypeTab?.Pending) { setFiltered(partners?.filter((item) => item?.status != true)) }
        if (selectedTab == AccountabilityTypeTab?.Accepted) { setFiltered(partners?.filter((item) => item?.status == true)) }
    }, [selectedTab])


    return (
        <StyledRoot
            style={{ paddingRight: 0, paddingLeft: 0 }}
            Header={() => (
                <AccountabilityDashboardHeaderContainer>
                    <AccountabilityDashboardHeaderTitle>Accountability</AccountabilityDashboardHeaderTitle>
                    <AccountabilityTabContainer>
                        <AccountabilityTab onPress={() => setSelectedTab(AccountabilityTypeTab?.All)} isActive={selectedTab === AccountabilityTypeTab?.All}>
                            <AccountabilityTabTitle>All</AccountabilityTabTitle>
                        </AccountabilityTab>
                        <AccountabilityTab onPress={() => setSelectedTab(AccountabilityTypeTab?.Pending)} isActive={selectedTab === AccountabilityTypeTab?.Pending}>
                            <AccountabilityTabTitle>Pending</AccountabilityTabTitle>
                        </AccountabilityTab>
                        <AccountabilityTab onPress={() => setSelectedTab(AccountabilityTypeTab?.Accepted)} isActive={selectedTab === AccountabilityTypeTab?.Accepted}>
                            <AccountabilityTabTitle>Accepted</AccountabilityTabTitle>
                        </AccountabilityTab>
                    </AccountabilityTabContainer>
                </AccountabilityDashboardHeaderContainer>
            )}
        >
            <AccountabilityDashboardContainer>
                <AccountabilityDashboardBodyContainer>
                    <FlatList
                        ListHeaderComponent={() => (isRefetching && <LoadingIndicator color={colors.vividRed} size={'large'} />)}
                        refreshing={isRefetching}
                        onRefresh={refetch}
                        data={filtered}
                        renderItem={({ item }: { item: AccountabilityPartnerModel }) => (
                            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat', item)}>
                                <AccountabilityProfileCardWrapper>
                                    <ProfileImage source={{ uri: item.partner?.profile_picture }}></ProfileImage>
                                    <AccountabilityProfileCardNameContainer>
                                        <AccountabilityProfileCardName selectedTab={selectedTab}>{item?.partner?.first_name} {item?.partner?.last_name}</AccountabilityProfileCardName>
                                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                                    </AccountabilityProfileCardNameContainer>
                                </AccountabilityProfileCardWrapper>
                                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
                            </AccountabilityProfileCardContainer>
                        )}
                    />
                </AccountabilityDashboardBodyContainer>
            </AccountabilityDashboardContainer>
        </StyledRoot>
    )
}

export default AccountabilityDashboard