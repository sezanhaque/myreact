import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count}
            <p>
                <button
                    type="button"
                    className="btn"
                    onClick={() => setCount((prevState) => prevState + 1)}
                >
                    Add 1
                </button>
            </p>
        </div>
    );
}

export default Counter;
