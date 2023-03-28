/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Todo from './components/useState/Todo';
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Text from './components/inheritance/Text';
// import Bracket from './components/composition/Bracket';
// import Emoji from './components/composition/Emoji';
// import Text from './components/composition/Text';
// import ClickCounter from './components/render props/ClickCounter';
// import HoverCounter from './components/render props/HoverCounter';
// import User from './components/User';
// import Section from './components/context api/Section';
// import Counter from './components/render props/Counter';
// import ThemeContext from './contexts/themeContext';
import Counter from './components/useState/Counter';

class App extends React.Component {
    state = {
        theme: 'dark',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return { theme: 'light' };
                }
                return { theme: 'dark' };
            });
        },
    };

    render() {
        return (
            // const quantities = [1, 2, 3];
            // return <ClockList quantities={quantities} />;
            // <Form />
            // <Calculator />
            // <Emoji>
            //     {({ addEmoji }) => (
            //         <Bracket>
            //             {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
            //         </Bracket>
            //     )}
            // </Emoji>
            <div className="App">
                {/* <ClickCounter />
                <HoverCounter /> */}
                {/* <User render={(isLoggedIn) => (isLoggedIn ? 'Sezan' : 'Guest')} /> */}

                {/* Context Api */}
                {/* <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider> */}
                {/* Context Api */}

                {/* useState */}
                <Todo />
                <Counter />
                {/* useState */}
            </div>
        );
    }
}

export default App;
