import { memo } from 'react';

function ShowCount({ count, title }) {
    console.log(`rendering ${title}, ${new Date().toLocaleTimeString()}`);

    return (
        <p>
            {title} clicked {count}
        </p>
    );
}

export default memo(ShowCount);
