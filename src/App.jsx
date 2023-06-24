/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/no-unused-state */
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
// import DateComponentFunctional from './components/useEffect/DateComponentFunctional';
// import Form from './components/userRef/Form';
// import Increment from './components/useMemo_UseCallBack/Increment';
// import ComplexCounter from './components/useReducer/ComplexCounter';
// import Counter from './components/useReducer/Counter';

// import LayoutComponentOne from './components/customHook/LayoutComponent';

// import ComplexCounter from './components/useReducer/ComplexCounter';
// import GetPost from './components/useReducer/GetPost';
// import GetPostReducer from './components/useReducer/GetPostReducer';

import Logo from './components/Logo';

import './assets/css/global.css';

export default function App() {
    // state = {
    //     theme: 'dark',
    //     switchTheme: () => {
    //         this.setState(({ theme }) => {
    //             if (theme === 'dark') {
    //                 return { theme: 'light' };
    //             }
    //             return { theme: 'dark' };
    //         });
    //     },
    // };

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
            {/* <Todo />
                <Counter /> */}
            {/* useState */}
            {/* useEffect */}
            {/* <DateComponent /> */}
            {/* <DateComponentFunctional /> */}
            {/* useEffect */}
            {/* userRef */}
            {/* <Form /> */}
            {/* userRef */}
            {/* useCallback */}
            {/* <Increment /> */}
            {/* useCallback */}
            {/* useReducer */}
            {/* <Counter /> <br /> */}
            {/* <ComplexCounter /> */}
            {/* useReducer */}
            {/* useReducer with useEffect */}
            {/* <GetPost /> */}
            {/* <GetPostReducer /> */}
            {/* useReducer with useEffect */}
            {/* customHook */}
            {/* <LayoutComponentOne /> */}
            {/* customHook */}
            <Logo />
        </div>
    );
}
