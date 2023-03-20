import React, { Component } from 'react';
import Button from './Button';

class Clock extends Component {
    // Declare state in constructor or as an object
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //         locale: 'en-US',
    //     };
    //     this.handleLocale = this.handleLocale.bind(this, 'en-US');
    // }
    state = {
        date: new Date(),
        locale: 'en-US',
    };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleLocale = (locale) => {
        this.setState({
            locale,
        });
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
                <h1>{date.toLocaleTimeString(locale)}</h1>
                {locale === 'en-US' ? (
                    <Button change={this.handleLocale} locale="bn-BD" />
                ) : (
                    <Button change={this.handleLocale} locale="en-US" />
                )}
            </div>
        );
    }
}

export default Clock;
