import React from 'react';
import withCounter from './HOC/withCounter';

function ClickCounter(props) {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" className="btn" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
}

export default withCounter(ClickCounter);
