import EncryptedStorage from 'react-native-encrypted-storage';

export const setIsFirstLaunch = async (state: boolean = true) => {
    try {
        await EncryptedStorage.setItem(
            "first_launch",
            JSON.stringify(state)
        );
    } catch (error) {
    }
}

export const getIsFirstLaunch = async () => {
    try {
        const session = await EncryptedStorage.getItem("first_launch");

        if (session !== undefined && session !== null) {
            return JSON.parse(session);
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

export const setLoginData = async (data: object = {}) => {
    try {
        await EncryptedStorage.setItem(
            "login_data",
            JSON.stringify(data)
        );
    } catch (error) {
    }
}

export const getLoginData = async () => {
    try {
        const session = await EncryptedStorage.getItem("login_data");

        if (session !== undefined && session !== null) {
            return JSON.parse(session);
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

export const setBiometricsEnabled = async (data: boolean = true) => {
    try {
        await EncryptedStorage.setItem(
            "biometrics_settings",
            JSON.stringify(data)
        );
    } catch (error) {
    }
}

export const getBiometricsEnabled = async () => {
    try {
        const session = await EncryptedStorage.getItem("biometrics_settings");

        if (session !== undefined && session !== null) {
            return JSON.parse(session);
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

