import React from 'react';

export default function ClickCounter({ count, incrementCount }) {
    return (
        <div>
            <button type="button" className="btn" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
}
