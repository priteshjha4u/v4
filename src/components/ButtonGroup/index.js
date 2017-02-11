/**
 * ButtonGroup
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { buttonGroup } from '../../styled/utilities/buttonGroup';

const defaultProps = { theme: bsTheme };

class ButtonGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    'btn-toolbar': PropTypes.bool,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, 'btn-toolbar': btnToolbar, ...rest } = this.props; // eslint-disable-line no-unused-vars

    let classList = [];

    // if this ButtonGroup is a btn-toolbar, then we don't need .btn-group
    if (btnToolbar) {
      classList = classList.filter((c) => c !== 'btn-group');
      classList.push('btn-toolbar');
    }

    return (
      <div
        className={cn(className, classList)}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
ButtonGroup = styled(ButtonGroup)`
  ${(props) => `
    ${buttonGroup(
      props.theme['$enable-shadows'],
      props.theme['$enable-rounded'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-toolbar-margin'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-active-box-shadow'],
      props.theme['$caret-width-lg'],
      props.theme['$btn-padding-x-lg'],
      props.theme['$btn-padding-y-lg'],
      props.theme['$font-size-lg'],
      props.theme['$btn-border-radius-lg'],
      props.theme['$btn-padding-x-sm'],
      props.theme['$btn-padding-y-sm'],
      props.theme['$font-size-sm'],
      props.theme['$btn-border-radius-sm'],
      props.theme['$btn-border-width']
    )}
  `}  
`;

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
