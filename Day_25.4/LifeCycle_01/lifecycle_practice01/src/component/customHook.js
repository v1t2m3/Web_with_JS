import { useEffect, useState } from "react";
export default function UpdateTime() {
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();
    const updatetime = () => {
        let now = new Date();
        setYear(now.getFullYear());
        setMonth(now.getMonth());
        setDay(now.getDate());
        setHour(now.getHours());
        setMinute(now.getMinutes());
        setSecond(now.getSeconds());
    };
    setInterval(() => {
        updatetime();
    }, 1000);
    return [year, month, day, hour, minute, second];
}
