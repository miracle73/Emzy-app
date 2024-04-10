import { useQuery } from '@tanstack/react-query';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import { useContext, useState } from 'react'
import { getUserDetails, getVideoConstants, getDashboardData } from '../../Utils/network_service/NetworkServices';
import { DashboardDataModel, VideoConstantsData } from '../../Utils/data_models/dataTypes';

export const useDashboardService = () => {
    const { setUserWholeDetails, userLoginData } = useContext(AppContext)
    const [dashboardData, setDashboadData] = useState<DashboardDataModel>({})
    const { refetch: refetchUserDetails, isRefetching: isRefetchingUserDetails } = useQuery(
        [
            'user_profile',
            { token: userLoginData?.data?.access }

        ],
        getUserDetails,
        {
            onSuccess: (data) => {
                if (data?.data?.status == 'success') {
                    setUserWholeDetails(data?.data)
                }
            },
            onError: (err: any) => { },
            // enabled: false
        });

    const { refetch: refetchDashboardData, isRefetching: isRefetchingDashboardData } = useQuery(
        [
            'user_DashboardData',
            { token: userLoginData?.data?.access }

        ],
        getDashboardData,
        {
            onSuccess: (data) => {
                if (data?.data?.status == 'success') {
                    setDashboadData(data?.data?.data)
                }
            },
            onError: (err: any) => { },
            // enabled: false
        });

    return [refetchUserDetails, isRefetchingUserDetails, dashboardData, refetchDashboardData, isRefetchingDashboardData]
}

export const useDashboardVideoConstants = () => {
    const { userLoginData } = useContext(AppContext)
    const [videoConstants, setVideoConstants] = useState<Array<VideoConstantsData>>()

    const { refetch: refetchVideoConstants, isRefetching: isRefetchingVideoConstants } = useQuery(
        [
            'constants',
            { token: userLoginData?.data?.access }

        ],
        getVideoConstants,
        {
            onSuccess: (data) => {
                if (data?.data?.status == 'success') {
                    setVideoConstants(data?.data?.data?.all_videos)
                }
            },
            onError: (err: any) => { },
            // enabled: false
        });

    return [videoConstants, refetchVideoConstants, isRefetchingVideoConstants]
}