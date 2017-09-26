/**
 * Menu component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import { fade } from 'bootstrap-styled-mixins/lib/utilities/transition';
import bsTheme from '../theme';

const defaultProps = { theme: bsTheme };

class OverlayUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    active: PropTypes.bool,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      active,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <div
        className={cn(className, 'fade', {
          show: active,
        })}
        {...attributes}
      />
    );
  }
}

const Overlay = styled(OverlayUnstyled)`
  ${(props) => `
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: ${props.theme['$zindex-overlay']};
    background: ${props.theme['$overlay-bg']};
    transform: translate3d(100%, 0, 0);
    ${fade(
      props.theme['$enable-transitions'],
      props.theme['$transition-fade'],
    )}
    &.show {
      transform: translate3d(0, 0, 0);
    }
  `}
`;

Overlay.defaultProps = defaultProps;

export default Overlay;
