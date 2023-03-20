import React, { Component } from 'react';
import Button from './Button';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: 'en-US',
        };
        this.handleLocale = this.handleLocale.bind(this, `params`);
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleLocale = (params) => {
        const { locale } = this.state;
        console.log(params);
        if (locale === 'en-US') {
            this.setState({
                locale: 'bn-BD',
            });
        } else {
            this.setState({
                locale: 'en-US',
            });
        }
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1>
                    Hello
                    <span> {date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleLocale} />
            </div>
        );
    }
}

export default Clock;
