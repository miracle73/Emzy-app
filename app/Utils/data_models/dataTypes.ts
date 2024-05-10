type ResponseSummary = {
    message?: string,
    status?: string
}

export type UserDetailsData = ResponseSummary & {
    data?: UserDetails
}
export type UserDetails = {
    id?: number,
    last_login?: string,
    first_name?: string,
    last_name?: string,
    is_staff?: boolean,
    is_active?: boolean,
    date_joined?: string,
    category?: string,
    email?: string,
    username?: string,
    phone_number?: string,
    email_verified?: boolean,
    is_suspended?: boolean,
    profile_picture?: string,
    wallet_balance?: number,
    auth_provider?: string,
    invited_by?: string,
    videos_watched?: Array<VideosWatched>
}

type VideosWatched = {
    video?: number,
    watched?: boolean
}

export type UserLoginResponseData = ResponseSummary & {
    data?: LoginData,
    message?: string,
    status?: string
}
export type LoginData = {
    access?: string,
    auth_provider?: string,
    balance?: number,
    category?: string,
    email?: string,
    first_name?: string,
    last_name?: string,
    profile_picture?: string,
    refresh?: string,
    user_id?: number,
    username?: string
}

export type VideoConstantsData = {
    title?: string,
    video_id?: number,
    video_link?: string
}

export type DashboardDataModel = {
    goal?: Goal,
    daily_tasks?: Array<DailyTasks>
}
type Goal = {
    id?: number,
    rewards?: Array<string>,
    percentage_complete?: number,
    accountability_partners?: [],
    desired_outcome?: string,
    success_identity?: string,
    success_metrics?: string,
    commitment_level?: number,
    duration?: number,
    commitment_reason?: string,
    triggers?: string,
    due_date?: string,
    date_created?: string,
    last_updated?: string,
    user?: number,
}
type DailyTasks = {
    id?: number,
    is_complete?: boolean,
    date_completed?: string,
    for_date?: string,
    goal?: number
}

export type GoalSettingDataModel = {
    topOutcome?: string,
    desiredOutcome?: string,
    successIdentity?: string,
    successMetrics?: string,
    rewards?: Array<string>,
    commitmentLevel?: number,
    duration?: number,
    commitmentReason?: string,
    triggers?: string,
    emoAccountabilityPartner?: boolean,
    accountabilityPartnerEmail?: string
}

export type AccountabilityPartnerModel = {
    id?: number,
    goal?: number,
    date_created?: string,
    date_accepted?: string,
    status?: boolean,
    partner?: Partner
}

type Partner = {
    id?: number,
    first_name?: string,
    last_name?: string,
    category?: string,
    email?: string,
    username?: string,
    wallet_balance?: number,
    profile_picture?: string
}