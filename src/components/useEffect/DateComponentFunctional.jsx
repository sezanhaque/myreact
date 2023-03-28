import { useEffect, useState } from 'react';

export default function DateComponentFunctional() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        // cleanup - stop the timer
        return () => {
            clearInterval(interval);
            console.log('component unmounted');
        };
    }, []);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button
                    type="button"
                    className="btn"
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                >
                    Click
                </button>
            </p>
        </div>
    );
}
