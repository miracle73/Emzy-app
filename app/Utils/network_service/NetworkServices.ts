import { GoalSettingDataModel } from "../data_models/dataTypes";

const axios = require('axios')?.default;
const API_BASE_URL = 'https://emotell.zeitios.com';


const headers = (token: string | null, contentType = 'application/json', timeout = 4000) => {

  if (token == '' || token == null) {
    return {
      headers: {
        'Content-Type': contentType,
        // 'Authorization': `Bearer ${token}`,
      },
      timeout
    }
  } else {
    return {
      headers: {
        'Content-Type': contentType,
        'Authorization': `Bearer ${token}`,
      },
      timeout
    }
  }
}

type QueryKeyType = { queryKey: any }

export const login = ({ email = '', password = '' }) => {

  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/login`, {
    email: email?.trim(),
    password: password?.trim(),
  });

  return response;
};

export const signup = ({ firstName = '', lastName = '', email = '', password = '' }) => {
  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/create`, {
    "first_name": firstName?.trim(),
    "last_name": lastName?.trim(),
    "email": email?.trim(),
    "password": password?.trim(),
  });
  return response;
};

export const verifyEmail = ({ queryKey }: QueryKeyType) => {
  const { otp, token } = queryKey[1];
  const response = axios.get(`${API_BASE_URL}/api/v1/accounts/user/verify-email?otp=${otp?.trim()}`,
    headers(token),
  );
  return response;
}

export const getUserDetails = ({ queryKey }: QueryKeyType) => {
  const { token } = queryKey[1];
  const response = axios.get(`${API_BASE_URL}/api/v1/accounts/user/get-user-detail`,
    headers(token),
  );
  return response;
}

export const updateProfile = ({ token = '', firstName = '', lastName = '' }) => {

  const response = axios.put(`${API_BASE_URL}/api/v1/accounts/user/update-profile-data`, {
    first_name: firstName?.trim(),
    last_name: lastName?.trim()
  }, headers(token));
  return response;
};

export const sendOtpForForgotPassword = ({ email = '' }) => {

  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/password/reset/request`, {
    email: email?.trim(),
  }, headers(''));
  return response;
};

export const verifyForgotPasswordOtp = ({ otp = '', email = '' }) => {

  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/password/reset/verify`, {
    email: email?.trim(),
    token: otp?.trim()
  }, headers(''));
  return response;
};

export const confirmNewPassword = ({ token = '', email = '', password = '', confirmPassword = '' }) => {

  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/password/reset/confirm`, {
    email: email?.trim(),
    token: token?.trim(),
    password_one: password?.trim(),
    password_two: confirmPassword?.trim()
  }, headers(''));
  return response;
};

export const resendEmailOtp = ({ queryKey }: QueryKeyType) => {
  const { token } = queryKey[1]
  const response = axios.get(`${API_BASE_URL}/api/v1/accounts/user/resend-email-otp`,
    headers(token));
  return response;
};

export const setNotifications = ({ token, notifications }:
  { token: string, notifications: any }) => {
  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/set-notifications`, {
    ...notifications
  }, headers(token));
  return response;
};

export const changePassword = ({ token = '', oldPassword = '', newPassword = '' }) => {

  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/password/change`, {
    old_password: oldPassword?.trim(),
    password: newPassword?.trim()
  }, headers(token));
  return response;
};


export const getVideoConstants = ({ queryKey }: QueryKeyType) => {
  const { token } = queryKey[1];
  const response = axios.get(`${API_BASE_URL}/api/v1/accounts/get-constants`,
    headers(token),
  );
  return response;
}

export const getDashboardData = ({ queryKey }: QueryKeyType) => {
  const { token } = queryKey[1];
  const response = axios.get(`${API_BASE_URL}/api/v1/goals/get-dashboard-data`,
    headers(token),
  );
  return response;
}

export const setAGoal = ({ token = '', goalObject }: { token: string, goalObject: GoalSettingDataModel }) => {
  console.log(goalObject, ' ===>><<')
  const response = axios.post(`${API_BASE_URL}/api/v1/goals/create-goal`, {
    "top_outcome": goalObject.topOutcome?.toLowerCase(),
    "desired_outcome": goalObject.desiredOutcome,
    "success_identity": goalObject.successIdentity,
    "success_metrics": goalObject.successMetrics,
    "rewards": goalObject.rewards,
    "commitment_level": goalObject.commitmentLevel,
    "duration": goalObject.duration,
    "commitment_reason": goalObject.commitmentReason,
    "triggers": goalObject.triggers,
    "emo_accountabilty_partner": goalObject.emoAccountabilityPartner,
    "accountabilty_partner_email": goalObject.accountabilityPartnerEmail
  }, headers(token));
  return response;
};


export const inviteAccountabilityPartner = ({ token = '', email = '', goalId = 0 }) => {

  const response = axios.post(`${API_BASE_URL}/api/v1/goals/invite-goal-partner`, {
    email: email?.trim(),
    goal: goalId
  }, headers(token));
  return response;
};

export const updateProfilePhoto = ({ image, token = '' }: { image: FormData, token: string | undefined }) => {
  console.log(image, ' klklk')
  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/update-profile-picture`,
    { profile_picture: image },
    headers(token, 'multipart/form-data'),
  )
  return response
}

export const getAccountabilityPartners = ({ queryKey }: QueryKeyType) => {
  const { token } = queryKey[1];
  const response = axios.get(`${API_BASE_URL}/api/v1/goals/list-goal-partners`,
    headers(token),
  );
  return response;
}

export const markVideosAsWatched = ({ token = '', videoId = 0 }) => {

  const response = axios.post(`${API_BASE_URL}/api/v1/accounts/user/mark_videos_as_watched`,
    { video: videoId },
    headers(token),
  )
  return response
}


export const getTasks = ({ queryKey }: QueryKeyType) => {
  const { token } = queryKey[1];
  const response = axios.get(`${API_BASE_URL}/api/v1/goals/list-goals?previous_count=1&next_count=2`,
    headers(token),
  );
  return response;
}

