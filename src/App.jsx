/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ClockList from './components/ClockList';

class App extends React.Component {
    render() {
        const quantities = [1, 2, 3];
        return <ClockList quantities={quantities} />;
    }
}

export default App;
