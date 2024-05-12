import { useRef, useState, useEffect } from 'react'

const useCountdownTimer = (start: boolean = false) => {
    const intervalRef = useRef<any>();
    const [count, setCount] = useState(59);
    const counter = useRef(59);
    const [minutes, setMinutes] = useState(1);
    const minutesCounter = useRef(1);
    const [toResend, setToResend] = useState<boolean>(false);
    const [timeCount, setTimecount] = useState<string>(count >= 10 ? `0${minutes}:${count}` : `0${minutes}:0${count}`)

    useEffect(() => {
        setTimecount(count >= 10 ? `0${minutes}:${count}` : `0${minutes}:0${count}`)
    }, [count]);

    const timer = () => {
        setToResend(false)
        intervalRef.current = setInterval(() => {
            if (counter.current > 0) {
                counter.current--;
                setCount(count => count - 1)
            } else {
                setMinutes(t => t - 1)
                minutesCounter.current--
                clearInterval(intervalRef.current);
                counter.current = 59;
                setCount(59);
                minutesTimer()
            }
        }, 1000);
    };

    const minutesTimer = () => {
        if (minutesCounter.current <= 0) {
            clearInterval(intervalRef.current);
            counter.current = 59;
            minutesCounter.current = 1
            setCount(59);
            setMinutes(1)
            setToResend(true);
        } else { timer() }
    }

    useEffect(() => {
        if (start) {
            timer();
        }
        return () => { clearInterval(intervalRef.current) };
    }, [start]);

    return [timeCount, toResend]
}


export default useCountdownTimer

