/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
import { Component } from 'react';

export default class Bracket extends Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ addBracket: this.addBracket });
    }
}
