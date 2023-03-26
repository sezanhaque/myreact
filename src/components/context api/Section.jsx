import React, { Component } from 'react';
import Content from './Content';

export default class Section extends Component {
    render() {
        return (
            <div>
                <h1>This is section</h1>
                <Content />
            </div>
        );
    }
}
