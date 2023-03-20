/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange } = this.props;
        const { change: nextChange } = nextProps;

        return !(currentChange === nextChange);
    }

    render() {
        const { change } = this.props;
        return (
            <button onClick={change} type="button" className="btn">
                Change locale
            </button>
        );
    }
}

export default Button;
