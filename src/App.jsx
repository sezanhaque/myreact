/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Text from './components/inheritance/Text';
// import Bracket from './components/composition/Bracket';
// import Emoji from './components/composition/Emoji';
// import Text from './components/composition/Text';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import Counter from './components/Counter';

class App extends React.Component {
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
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                <Counter>
                    {(counter, incrementCount) => (
                        <HoverCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
            </div>
        );
    }
}

export default App;
