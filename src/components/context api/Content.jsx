import ThemeContext from '../../contexts/themeContext';
import Counter from '../render props/Counter';
import HoverCounter from '../render props/HoverCounter';

export default function Content() {
    return (
        <div>
            <h1>This is content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter
                                count={counter}
                                incrementCount={incrementCount}
                                theme={theme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
