import React, { FC, createContext, useState } from 'react'
import { UserDetailsData, UserLoginResponseData, GoalSettingDataModel } from '../../Utils/data_models/dataTypes';

interface Props {
    children?: React.ReactNode,
    setUserLoginData?: any,
    userLoginData?: UserLoginResponseData,
    isFreshInstall?: boolean,
    setIsfreshInstall?: any,
    userWholeDetails?: UserDetailsData,
    setUserWholeDetails?: any,
    goalObject?: GoalSettingDataModel,
    setGoalObject?: any,
    signupInProgress?: boolean,
    setSignupInProgress?: any,
    signupToken?: string,
    setSignupToken?: any,
    onboardingVideoUrls?: OnboardingVideoUrlsData,
    setOnboardingVideoUrls?: any,
    profileUrl?: string,
    setProfileUrl?: any
}


type OnboardingVideoUrlsData = {
    DesireSplashInitial?: string,
    IdentitySplashInitial?: string,
    TriggerSplashInitial?: string,
    CommitmentSplashInitial?: string,
    MetricSplashInitial?: string,
    GoalSplashInitial?: string,
    AccountabilityManagerSplashInitial?: string,
    RewardSplashSubsequent?: string,
    AccountabilitySplashInitial?: string
}

const AppContext = createContext<Props>({});
const ContextProvider: FC<Props> = ({ children }) => {
    const [userLoginData, setUserLoginData] = useState<UserLoginResponseData>({});
    const [userWholeDetails, setUserWholeDetails] = useState<UserDetailsData>({});
    const [isFreshInstall, setIsfreshInstall] = useState<boolean>(true);
    const [signupInProgress, setSignupInProgress] = useState<boolean>(false);
    const [signupToken, setSignupToken] = useState<string>('');
    const [profileUrl, setProfileUrl] = useState<string>('');
    const [goalObject, setGoalObject] = useState<GoalSettingDataModel>({
        topOutcome: '',
        desiredOutcome: '',
        successIdentity: '',
        successMetrics: '',
        rewards: [''],
        commitmentLevel: 0,
        duration: 0,
        commitmentReason: '',
        triggers: '',
        emoAccountabilityPartner: false,
        accountabilityPartnerEmail: ''

    })

    const [onboardingVideoUrls, setOnboardingVideoUrls] = useState<OnboardingVideoUrlsData>({
        DesireSplashInitial: '',
        IdentitySplashInitial: '',
        TriggerSplashInitial: '',
        CommitmentSplashInitial: '',
        MetricSplashInitial: '',
        GoalSplashInitial: '',
        AccountabilityManagerSplashInitial: '',
        RewardSplashSubsequent: '',
        AccountabilitySplashInitial: ''
    })


    return (
        <AppContext.Provider
            value={{
                userLoginData,
                setUserLoginData,
                isFreshInstall,
                setIsfreshInstall,
                userWholeDetails,
                setUserWholeDetails,
                goalObject,
                setGoalObject,
                signupInProgress,
                setSignupInProgress,
                signupToken,
                setSignupToken,
                onboardingVideoUrls,
                setOnboardingVideoUrls,
                profileUrl,
                setProfileUrl
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, ContextProvider };
