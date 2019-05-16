import React, { Component } from 'react';
import {styled, withTheme} from '../../styles/src/index';

const Button = styled.button`
  background: ${props => props.theme.main};
  color: ${props => props.theme.secondary};
`;

export class BaseButton extends Component {

    render() {
        console.log(this.props.theme);
        return <Button {...this.props} />;
    }
}

export default withTheme(BaseButton);
