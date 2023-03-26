// import React, {Component} from 'react';
import { useContext } from 'react';
import ThemeContext from '../../contexts/themeContext';
import Counter from '../render props/Counter';
import HoverCounter from '../render props/HoverCounter';

// class component way
// export default class Content extends Component {
//     render() {
//         const { theme, switchTheme } = this.context;
//         return (
//             <div>
//                 <h1>This is content</h1>
//                 <Counter>
//                     {(counter, incrementCount) => (
//                         <HoverCounter
//                             count={counter}
//                             incrementCount={incrementCount}
//                             theme={theme}
//                             switchTheme={switchTheme}
//                         />
//                     )}
//                 </Counter>
//             </div>
//         );
//     }
// }

// Content.contextType = ThemeContext;

// functional way
export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>This is content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
