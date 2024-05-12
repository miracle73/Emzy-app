import React, { FC, createContext, useState } from 'react'
import { UserDetailsData, UserLoginResponseData } from '../../Utils/data_models/dataTypes';

interface Props {
    children?: React.ReactNode,
    setUserLoginData?: any,
    userLoginData?: UserLoginResponseData,
    isFreshInstall?: boolean,
    setIsfreshInstall?: any,
    userWholeDetails?: UserDetailsData,
    setUserWholeDetails?: any
}
const AppContext = createContext<Props>({});
const ContextProvider: FC<Props> = ({ children }) => {
    const [userLoginData, setUserLoginData] = useState<UserLoginResponseData>({});
    const [userWholeDetails, setUserWholeDetails] = useState<UserDetailsData>({});
    const [isFreshInstall, setIsfreshInstall] = useState<boolean>(true);


    return (
        <AppContext.Provider
            value={{
                userLoginData,
                setUserLoginData,
                isFreshInstall,
                setIsfreshInstall,
                userWholeDetails,
                setUserWholeDetails
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, ContextProvider };
