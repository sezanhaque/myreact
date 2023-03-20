import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        title: 'JavaScript',
        description: 'React Tutorial',
        library: 'React',
        isAwesome: false,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleCheckbox = (e) => {
        this.setState({
            isAwesome: e.target.checked,
        });
    };

    handleSubmit = (e) => {
        const { title, description, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, description, library, isAwesome);
    };

    render() {
        const { title, description, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        id=""
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br /> <br />
                    <textarea name="description" value={description} onChange={this.handleChange} />
                    <br /> <br />
                    <select name="library" value={library} onChange={this.handleChange}>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br /> <br />
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        value={isAwesome}
                        onChange={this.handleCheckbox}
                    />
                    {isAwesome && <p>Awesome</p>}
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
