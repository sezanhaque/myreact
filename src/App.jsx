/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Text from './components/inheritance/Text';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';

class App extends React.Component {
    render() {
        return (
            // const quantities = [1, 2, 3];
            // return <ClockList quantities={quantities} />;
            // <Form />
            // <Calculator />
            <Emoji>
                {({ addEmoji }) => (
                    <Bracket>
                        {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                    </Bracket>
                )}
            </Emoji>
        );
    }
}

export default App;
