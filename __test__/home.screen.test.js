import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/Home/home.screen';

describe('<Home />', () => {
    it('check for error', () => {
      const home = renderer.create(<Home/>)
    //   weatherSearch.setState({loaded: true})
      expect(home.children).toBeUndefined();
    });
  });