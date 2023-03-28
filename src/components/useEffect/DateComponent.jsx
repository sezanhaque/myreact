import { Component } from 'react';

export default class DateComponent extends Component {
    state = {
        count: 0,
        date: new Date(),
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        this.timeTick = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
    }

    componentWillUnmount() {
        clearInterval(this.timeTick);
    }

    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    };

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

    render() {
        const { date } = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" className="btn" onClick={this.addClick}>
                        Click
                    </button>
                </p>
            </div>
        );
    }
}
