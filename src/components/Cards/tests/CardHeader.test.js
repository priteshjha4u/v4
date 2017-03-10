/**
 * Testing our CardHeader component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import CardHeader from '../CardHeader';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <CardHeader
    className={props.className}
  >
    {children}
  </CardHeader>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <CardHeader
      className={props.className}
    >
      {children}
    </CardHeader>
  </ThemeProvider>
);


describe('<CardHeader />', () => {
  it('should render an <CardHeader> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardHeader> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardHeader').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a class .card-header by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').hasClass('card-header')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});