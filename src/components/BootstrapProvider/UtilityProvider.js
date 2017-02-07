import styled from 'styled-components';
import { conditionalMixins } from '../../mixins';
import {
  alignUtils,
  aUtils,
  backgroundUtils,
  bordersUtils,
  clearfixUtils,
  displayUtils,
  flexUtils,
  floatUtils,
  screenreadersUtils,
  spacingUtils,
  textUtils,
  visibilityUtils,
} from '../../utilities';
import theme from '../../config';

const defaultProps = {
  theme,
  utils: {
    align: false,
    background: false,
    a: false,
    border: false,
    clearfix: false,
    display: false,
    flex: false,
    float: false,
    screenreaders: false,
    spacing: false,
    text: false,
    visibility: false,
  },
};

const ifThen = conditionalMixins.ifThen;

// eslint-disable-next-line no-class-assign
const UtilityProvider = styled.div`
  ${(props) => `
    ${ifThen(props.utils.align, alignUtils.getAlignUtilities())}
    ${ifThen(props.utils.background, backgroundUtils.getBackgroundUtilities(
      props.theme['$brand-primary'],
      props.theme['$brand-success'],
      props.theme['$brand-info'],
      props.theme['$brand-warning'],
      props.theme['$brand-danger'],
      props.theme['$brand-inverse'],
      props.theme['$gray-lightest'],
    ))}
    ${ifThen(props.utils.a, aUtils.a(
      props.theme['$link-color'],
      props.theme['$link-decoration'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
      props.theme['$enable-hover-media-query'],
    ))}
    ${ifThen(props.utils.border, bordersUtils.getBordersUtilities(
      props.theme['$enable-rounded'],
      props.theme['$border-radius']
    ))}
    ${ifThen(props.utils.clearfix, clearfixUtils.getClearfixUtilities())}
    ${ifThen(props.utils.display, displayUtils.getDisplayUtilities(
      props.theme['$grid-breakpoints'],
    ))}
    ${ifThen(props.utils.flex, flexUtils.getFlexUtilities(
      props.theme['$grid-breakpoints'],
    ))}
    ${ifThen(props.utils.float, floatUtils.getFloatUtilities(
      props.theme['$grid-breakpoints'],
    ))}
    ${ifThen(props.utils.screenreaders, screenreadersUtils.getScreenReadersUtilities())}
    ${ifThen(props.utils.spacing, spacingUtils.getSpacingUtilities(
      props.theme['$grid-breakpoints'],
      props.theme['$zindex-navbar-fixed'],
      props.theme['$spacers'], // eslint-disable-line dot-notation
    ))}
    ${ifThen(props.utils.text, textUtils.getTextUtilities(
      props.theme['$enable-hover-media-query'],
      props.theme['$grid-breakpoints'],
      props.theme['$font-weight-normal'],
      props.theme['$font-weight-bold'],
      props.theme['$text-muted'],
      props.theme['$brand-primary'],
      props.theme['$brand-success'],
      props.theme['$brand-info'],
      props.theme['$brand-warning'],
      props.theme['$brand-danger'],
      props.theme['$gray-dark']
    ))}
    ${ifThen(props.utils.visibility, visibilityUtils.getVisibilityUtilities(
      props.theme['$grid-breakpoints']
    ))}    
  `}
`;

UtilityProvider.defaultProps = defaultProps;

export default UtilityProvider;
