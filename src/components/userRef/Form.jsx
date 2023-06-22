import { useEffect, useRef } from 'react';
import Input from './Input';
import Time from './Time';

export default function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        // component did load
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <Time />
            <p>
                <Input ref={inputRef} type="text" placeholder="Enter something" />
            </p>
        </div>
    );
}
