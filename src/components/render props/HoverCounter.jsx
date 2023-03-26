import React from 'react';

export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <h1 style={style} onFocus={incrementCount} onMouseOver={incrementCount}>
                Clicked {count} times
            </h1>
            <button type="button" className="btn" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}
