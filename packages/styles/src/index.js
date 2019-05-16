// component-lib/ThemeProvider.js
import React from 'react';
import styled from 'styled-components';
import {withTheme, ThemeProvider} from 'styled-components';

const defaultTheme = {
  main: 'mediumseagreen',
  secondary: 'white',
  // 👆 Create the default theme
};

const ComponentLibThemeProvider = (props) => {
  const theme = {
    myComponentLib: Object.assign({}, defaultTheme, props.theme),
    // 👆 Merge the default theme with the user-provided theme
  };
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}

export {styled, withTheme};
export default ComponentLibThemeProvider;