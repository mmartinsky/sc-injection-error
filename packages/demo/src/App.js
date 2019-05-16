import React, { Component } from 'react';
import Button from '../../core/src/core';
import ThemeProvider from '../../styles/src/index';

const myTheme = {
    main: 'palevioletred',
    secondary: 'cream',
    // 👆👌 No namespacing needed on the users side
};

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={myTheme}>
                <Button>I have the users theme!</Button>
            </ThemeProvider>
        );
    }
}
