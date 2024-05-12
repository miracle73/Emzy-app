import { useMutation } from "@tanstack/react-query";
import { markVideosAsWatched } from "../../Utils/network_service/NetworkServices";
import { displayToast } from "../../Utils/utility_functions/utilityFunctions";
import { useState } from "react";

export const useOnboardingService = () => {
    const [status, setStatus] = useState<boolean | null>(null)
    const { mutate: markWatched, isLoading: isMarking } = useMutation(markVideosAsWatched, {
        onSuccess: (data: any) => {
            console.log(data?.data)
            if (data?.data?.status == 'success') {
                setStatus(true)
            } else {
                setStatus(false)
                displayToast('error', 'ERROR', data?.data?.message)
                return
            }
        },
        onError: (err: any) => {
            setStatus(false)
            console.log(err.response?.data, '  334343434343')
            displayToast('error', 'ERROR', 'Error occured. Please try again')
        },
    });

    return [markWatched, isMarking, status]
}