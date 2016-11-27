import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <strong>Hello from {this.props.phrase}!</strong>;
    }
}

export default HelloWorld;
