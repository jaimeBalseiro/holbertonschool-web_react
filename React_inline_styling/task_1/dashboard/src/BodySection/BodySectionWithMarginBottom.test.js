import React from 'react';
import { assert } from 'chai';
import { shallow } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Renders BodySection', () => {
    const body = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    assert.equal(body.find(BodySection).length, 1);
    body.text().includes('test title');
    assert.equal(body.find('p').length, 1);
  });
});