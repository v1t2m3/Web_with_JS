import UpdateTime from "./customHook";
export default function DemoCustomHook() {
    const [year, month, day, hour, minute, second] = UpdateTime();
    return (
        <div className="container rounded-3 bg-dark col-6 my-5 py-5">
            <h2 className="text-center  text-light">
                Time now {hour} : {minute} : {second} - {day}/{month + 1}/{year}
            </h2>
        </div>
    );
}
